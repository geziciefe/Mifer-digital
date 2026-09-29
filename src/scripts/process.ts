export function initProcess(signal: AbortSignal, reducedMotion: boolean, saveData: boolean) {
  const section = document.querySelector<HTMLElement>('[data-process]');
  if (!section) return;
  const list = section.querySelector<HTMLElement>('.process-steps')!;
  const steps = Array.from(section.querySelectorAll<HTMLElement>('[data-process-step]'));
  const links = Array.from(section.querySelectorAll<HTMLAnchorElement>('.process-map a'));
  const counter = section.querySelector<HTMLElement>('[data-process-count]')!;
  const motion = !reducedMotion && !saveData;
  section.classList.toggle('has-process-motion', motion);
  let current = -1;
  let frame = 0;
  let visible = false;
  let animation: Animation | undefined;
  const update = () => {
    frame = 0;
    if (!visible || signal.aborted) return;
    const threshold = innerHeight * .48;
    let index = 0;
    steps.forEach((step, i) => { if (step.getBoundingClientRect().top < threshold) index = i; });
    const rect = list.getBoundingClientRect();
    list.style.setProperty('--process-progress', String(Math.max(0, Math.min(1, (threshold - rect.top - 24) / (rect.height - 48)))));
    if (index === current) return;
    current = index;
    steps.forEach((step, i) => {
      step.classList.toggle('is-current', i === current);
      step.classList.toggle('is-complete', i < current);
      if (i === current) links[i].setAttribute('aria-current', 'step');
      else links[i].removeAttribute('aria-current');
    });
    counter.textContent = steps[current].querySelector('.process-node')!.textContent;
    if (motion) {
      animation?.cancel();
      animation = counter.animate([{ opacity: .65 }, { opacity: 1 }], { duration: 500, easing: 'cubic-bezier(.16,1,.3,1)' });
    }
  };
  const schedule = () => { if (visible && !frame) frame = requestAnimationFrame(update); };
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; section.classList.toggle('is-process-visible', visible); schedule(); });
  observer.observe(section);
  addEventListener('scroll', schedule, { passive: true, signal });
  addEventListener('resize', schedule, { passive: true, signal });
  signal.addEventListener('abort', () => { observer.disconnect(); cancelAnimationFrame(frame); animation?.cancel(); }, { once: true });
}
