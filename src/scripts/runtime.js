import { initPackages } from './packages';
/* Mifer runtime: one lightweight lifecycle for both normal loads and Astro client navigation. */
let pageController;
let firstPageLoad = true;

const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function scheduleTimeout(callback, delay, signal) {
  const id = window.setTimeout(() => {
    if (!signal.aborted) callback();
  }, delay);
  signal.addEventListener('abort', () => window.clearTimeout(id), { once: true });
  return id;
}

// Astro owns navigation, history and scroll restoration. No custom history entries.
function initNavigationUX(signal) {
  qsa('a[data-nav-link]').forEach(anchor => {
    if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
    anchor.addEventListener('pointerdown', () => {
      anchor.classList.add('is-pressing');
      scheduleTimeout(() => anchor.classList.remove('is-pressing'), 150, signal);
    }, { passive: true, signal });
  });
}
function initHeroShader(signal, reducedMotion, saveData) {
  const canvas = document.querySelector('[data-hero-shader]');
  if (!(canvas instanceof HTMLCanvasElement)) return;

  if (reducedMotion || saveData) {
    canvas.classList.add('is-static');
    return;
  }

  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power'
  });
  if (!gl) {
    canvas.classList.add('is-static');
    return;
  }

  const vertexSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;
  const fragmentSource = `
    precision highp float;
    uniform vec2 resolution;
    uniform float time;

    void main(void) {
      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      float t = time * 0.084;
      float lineWidth = 0.00185;
      vec3 energy = vec3(0.0);

      for (int j = 0; j < 3; j++) {
        for (int i = 0; i < 5; i++) {
          energy[j] += lineWidth * float(i * i) /
            abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
        }
      }

      float glow = clamp(dot(energy, vec3(0.333)) * 0.81, 0.0, 1.0);
      float split = clamp(0.48 + uv.x * 0.18 + sin(t * 4.0 + uv.y * 2.0) * 0.08, 0.0, 1.0);
      vec3 electricBlue = vec3(0.018, 0.22, 0.95);
      vec3 miferGreen = vec3(0.06, 0.62, 0.28);
      vec3 colour = mix(electricBlue, miferGreen, split) * glow;
      colour += vec3(0.015, 0.02, 0.028);
      gl_FragColor = vec4(colour, 1.0);
    }
  `;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertexShader = compile(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    canvas.classList.add('is-static');
    return;
  }

  const program = gl.createProgram();
  if (!program) return;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    canvas.classList.add('is-static');
    return;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const resolution = gl.getUniformLocation(program, 'resolution');
  const time = gl.getUniformLocation(program, 'time');
  const startedAt = performance.now();
  let frame = 0;
  let lastFrame = 0;
  let inView = true;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  };

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };
  const draw = (now) => {
    frame = 0;
    if (!inView || document.hidden || signal.aborted) return;
    if (now - lastFrame > 30) {
      lastFrame = now;
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, (now - startedAt) * 0.003);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    frame = requestAnimationFrame(draw);
  };
  const start = () => {
    if (!frame && inView && !document.hidden) frame = requestAnimationFrame(draw);
  };

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(([entry]) => {
        inView = Boolean(entry?.isIntersecting);
        if (inView) start(); else stop();
      }, { rootMargin: '12% 0px', threshold: 0 })
    : null;
  observer?.observe(canvas);

  const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(canvas);
  window.addEventListener('resize', resize, { passive: true, signal });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); }, { signal });
  resize();
  start();

  signal.addEventListener('abort', () => {
    stop();
    observer?.disconnect();
    resizeObserver?.disconnect();
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  }, { once: true });
}

function initHeader(signal) {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open');
  const closeIcon = document.getElementById('menu-close');
  const header = document.querySelector('[data-site-header]');

  if (toggle && menu && openIcon && closeIcon) {
    const close = () => {
      menu.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const opening = menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden', opening);
      closeIcon.classList.toggle('hidden', !opening);
      toggle.setAttribute('aria-expanded', String(opening));
    }, { signal });
    qsa('a', menu).forEach((link) => link.addEventListener('click', close, { signal }));
    qsa('[data-contact-open]', menu).forEach((button) => button.addEventListener('click', close, { signal }));
  }

  if (!header) return;
  const revealAfterScroll = header.classList.contains('site-header-reveal');
  let hasRevealed = !revealAfterScroll || window.scrollY > 36;
  let lastY = Math.max(0, window.scrollY);
  let offset = 0;
  let ticking = false;
  let headerHeight = header.offsetHeight || 112;

  const updateHeader = () => {
    const y = Math.max(0, window.scrollY);
    const delta = y - lastY;
    header.classList.toggle('is-scrolled', y > 10);

    if (revealAfterScroll) {
      if (y > 36) hasRevealed = true;
      header.classList.toggle('is-revealed', hasRevealed);
      offset = 0;
      header.style.setProperty('--header-shift', '0px');
      lastY = y;
      ticking = false;
      return;
    }

    if (y < 24) offset = 0;
    else if (delta > 0) offset = Math.min(headerHeight + 8, offset + delta * 0.72);
    else if (delta < 0) offset = Math.max(0, offset + delta * 1.18);

    header.style.setProperty('--header-shift', `${offset}px`);
    lastY = y;
    ticking = false;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHeader);
  };
  const onResize = () => {
    headerHeight = header.offsetHeight || 112;
    offset = 0;
    header.style.setProperty('--header-shift', '0px');
  };

  window.addEventListener('scroll', onScroll, { passive: true, signal });
  window.addEventListener('resize', onResize, { passive: true, signal });
  updateHeader();
}

function initReveal(signal, reducedMotion) {
  const elements = qsa('[data-reveal]');
  if (!elements.length || reducedMotion || !('IntersectionObserver' in window)) return;

  elements.forEach((el, index) => {
    el.classList.add('reveal-pending');
    el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal-pending');
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -5% 0px' });

  elements.forEach((el) => observer.observe(el));
  signal.addEventListener('abort', () => observer.disconnect(), { once: true });
}

function initParallax(signal, reducedMotion, saveData) {
  if (reducedMotion || saveData) return;
  const items = qsa('[data-parallax]');
  if (!items.length) return;

  const active = new Set();
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight || 1;
    active.forEach((item) => {
      const r = item.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const normalized = Math.max(-1, Math.min(1, (center - vh / 2) / vh));
      item.style.setProperty('--parallax-y', `${normalized * -16}px`);
    });
    ticking = false;
  };
  const requestUpdate = () => {
    if (ticking || !active.size) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.add(entry.target);
        else active.delete(entry.target);
      });
      requestUpdate();
    }, { rootMargin: '22% 0px 22% 0px', threshold: 0 });
    items.forEach((item) => observer.observe(item));
    signal.addEventListener('abort', () => observer.disconnect(), { once: true });
  } else {
    items.forEach((item) => active.add(item));
  }

  window.addEventListener('scroll', requestUpdate, { passive: true, signal });
  window.addEventListener('resize', requestUpdate, { passive: true, signal });
  requestUpdate();
}

function initMagnetic(signal, reducedMotion, saveData) {
  if (reducedMotion || saveData || !window.matchMedia('(pointer:fine)').matches) return;
  qsa('.header-contact, .lang-switch-round, .hero-cta-primary, .form-submit').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const r = el.getBoundingClientRect();
      const x = (event.clientX - (r.left + r.width / 2)) * .1;
      const y = (event.clientY - (r.top + r.height / 2)) * .1;
      el.style.setProperty('--mag-x', `${x}px`);
      el.style.setProperty('--mag-y', `${y}px`);
    }, { signal });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--mag-x', '0px');
      el.style.setProperty('--mag-y', '0px');
    }, { signal });
  });
}

function initMotionBudget(signal, reducedMotion, saveData) {
  const sections = qsa('.hero-section, .kinetic-stage, .about-section');
  if (!sections.length) return;

  if (reducedMotion || saveData || !('IntersectionObserver' in window)) {
    if (reducedMotion || saveData) sections.forEach((el) => el.classList.add('motion-lite'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('motion-paused', !entry.isIntersecting);
    });
  }, { rootMargin: '260px 0px 260px 0px', threshold: 0 });

  sections.forEach((el) => observer.observe(el));
  signal.addEventListener('abort', () => observer.disconnect(), { once: true });
}

function initContact(signal) {
  const panel = document.getElementById('contact-panel');
  const form = document.getElementById('contact-form');
  if (!panel || !form) return;

  const recipient = panel.dataset.recipient || '';
  const subjectText = panel.dataset.mailSubject || 'Mifer Digital';
  let fields = {};
  try { fields = JSON.parse(panel.dataset.mailFields || '{}'); } catch (_) {}
  let lastFocused = null;
  const phoneInput = form.querySelector('input[name="phone"]');
  if (phoneInput instanceof HTMLInputElement) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    }, { signal });
  }

  const openPanel = () => {
    lastFocused = document.activeElement;
    panel.inert = false;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('contact-open');
    requestAnimationFrame(() => panel.querySelector('input')?.focus());
  };
  const closePanel = () => {
    panel.inert = true;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('contact-open');
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const opener = target.closest('[data-contact-open]');
    if (!opener) return;
    event.preventDefault();
    if (opener.dataset.package) {
      const message = form.querySelector('textarea[name="message"]');
      if (message) message.value = opener.dataset.package;
    }
    openPanel();
  }, { signal });
  qsa('[data-contact-close]', panel).forEach((closer) => closer.addEventListener('click', closePanel, { signal }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
  }, { signal });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = [
      `${fields.name || 'Name'}: ${data.get('name') || ''}`,
      `${fields.business || 'Business'}: ${data.get('business') || ''}`,
      `${fields.email || 'Email'}: ${data.get('email') || ''}`,
      `${fields.phone || 'Phone'}: +90${String(data.get('phone') || '').replace(/\D/g, '')}`,
      `${fields.website || 'Website'}: ${data.get('website') || '-'}`,
      `${fields.instagram || 'Instagram'}: ${data.get('instagram') || '-'}`,
      '', `${fields.message || 'Message'}:`, String(data.get('message') || '')
    ].join('\n');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
  }, { signal });
}

function initPage() {
  if (pageController) pageController.abort();
  pageController = new AbortController();
  const { signal } = pageController;

  document.documentElement.classList.toggle('is-client-nav', !firstPageLoad);
  firstPageLoad = false;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);

  initHeroShader(signal, reducedMotion, saveData);
  initHeader(signal);
  initNavigationUX(signal, reducedMotion, saveData);
  initReveal(signal, reducedMotion);
  initParallax(signal, reducedMotion, saveData);
  initMagnetic(signal, reducedMotion, saveData);
  initMotionBudget(signal, reducedMotion, saveData);
  initContact(signal);
  initPackages(signal, reducedMotion, saveData);
}

let progressTimer;
const endProgress = () => {
  clearTimeout(progressTimer);
  document.documentElement.classList.remove('is-navigating');
  const bar = document.querySelector('[data-route-progress]');
  bar?.classList.remove('is-running');
  bar?.style.setProperty('--route-progress', '1');
};
document.addEventListener('astro:before-preparation', event => {
  document.documentElement.classList.add('is-client-nav', 'is-navigating');
  const bar = document.querySelector('[data-route-progress]');
  bar?.style.setProperty('--route-progress', '.75');
  bar?.classList.add('is-running');
  clearTimeout(progressTimer);
  progressTimer = window.setTimeout(endProgress, 8000);
  const original = event.loader;
  event.loader = async () => {
    try { await original(); }
    catch (error) { endProgress(); throw error; }
  };
});
document.addEventListener('astro:before-swap', () => { pageController?.abort(); });
document.addEventListener('astro:page-load', () => { initPage(); endProgress(); });
window.addEventListener('pageshow', endProgress);
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('is-page-hidden', document.hidden);
});
