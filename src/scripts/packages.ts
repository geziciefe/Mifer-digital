import { pricing, annualPricing, planWhatsAppLink } from '../data/pricing';
export function initPackages(signal: AbortSignal, reducedMotion: boolean, saveData: boolean) {
  const section = document.querySelector<HTMLElement>('[data-packages]');
  if (!section) return;
  const tr = section.dataset.lang === 'tr';
  const f = (n: number) => new Intl.NumberFormat(tr ? 'tr-TR' : 'en-GB').format(n);
  const motion = !reducedMotion && !saveData;
  const frames = new Map<HTMLElement, number>();
  const animations = new Set<Animation>();
  const play = (element: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
    const animation = element.animate(keyframes, options);
    animations.add(animation);
    animation.onfinish = () => animations.delete(animation);
  };
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  if (header) {
    const setOffset = () => section.style.setProperty('--package-sticky-top', `${header.offsetHeight}px`);
    setOffset();
    const observer = new ResizeObserver(setOffset);
    observer.observe(header);
    signal.addEventListener('abort', () => observer.disconnect(), { once: true });
  }
  const renderPrice = (element: HTMLElement, target: number, animate: boolean) => {
    const pending = frames.get(element);
    if (pending) cancelAnimationFrame(pending);
    const from = Number(element.dataset.priceValue || target);
    const paint = (n: number) => { element.dataset.priceValue = String(n); element.textContent = `${f(Math.round(n))} TL`; };
    if (!animate || !motion) { paint(target); return; }
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / 520);
      paint(from + (target - from) * (1 - Math.pow(1 - progress, 4)));
      if (progress < 1) frames.set(element, requestAnimationFrame(tick));
      else { paint(target); frames.delete(element); }
    };
    frames.set(element, requestAnimationFrame(tick));
  };
  const update = (annual: boolean, animate: boolean) => {
    section.dataset.period = annual ? 'annual' : 'monthly';
    section.querySelectorAll<HTMLElement>('[data-plan]').forEach(card => {
      const plan = pricing.find(p => p.id === card.dataset.plan)!;
      const price = annualPricing(plan);
      const amount = annual ? price.equivalent : plan.monthly;
      const unit = annual ? (tr ? '/ay karşılığı' : '/month equivalent') : (tr ? '/ay' : '/month');
      renderPrice(card.querySelector<HTMLElement>('[data-plan-price]')!, amount, animate);
      card.querySelector('[data-plan-unit]')!.textContent = unit;
      card.querySelector('[data-plan-announcement]')!.textContent = `${f(amount)} TL ${unit}`;
      card.querySelector('[data-plan-payment]')!.textContent = annual ? (tr ? 'Yıllık ödemede' : 'Billed annually') : (tr ? 'Aylık ödeme' : 'Billed monthly');
      card.querySelector('[data-plan-old-price]')!.textContent = annual ? `${f(plan.monthly)} TL` : '';
      card.querySelector('[data-plan-discount]')!.textContent = annual ? (tr ? `%${f(price.discount)} indirim` : `${f(price.discount)}% off`) : '';
      card.querySelector('[data-plan-saving]')!.textContent = annual ? (tr ? `Yılda ${f(price.savings)} TL avantaj` : `Save TL ${f(price.savings)} per year`) : '';
      card.querySelector<HTMLAnchorElement>('[data-plan-cta]')!.href = planWhatsAppLink(plan, tr ? 'tr' : 'en', annual);
      if (animate && motion) play(card.querySelector('.package-saving')!, [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 420, easing: 'ease-out' });
    });
  };
  update(section.querySelector<HTMLInputElement>('[name="package-period"]:checked')?.value === 'annual', false);
  section.querySelectorAll<HTMLInputElement>('[name="package-period"]').forEach(input => input.addEventListener('change', () => {
    if (input.checked) update(input.value === 'annual', true);
  }, { signal }));

  if (motion && 'IntersectionObserver' in window) {
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(entries => {
      let stagger = 0;
      entries.forEach(entry => {
        entry.target.classList.toggle('is-package-visible', entry.isIntersecting);
        if (!entry.isIntersecting || seen.has(entry.target)) return;
        seen.add(entry.target);
        play(entry.target, [
          { opacity: 0, transform: 'translateY(42px) scale(.97)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ], { duration: 800, delay: stagger++ * 110, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
      });
    }, { threshold: .08 });
    section.querySelectorAll('[data-package-reveal]').forEach(el => observer.observe(el));
    signal.addEventListener('abort', () => observer.disconnect(), { once: true });
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      section.querySelectorAll<HTMLElement>('[data-plan]').forEach(card => card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
      }, { passive: true, signal }));
    }
  }
  signal.addEventListener('abort', () => {
    frames.forEach(id => cancelAnimationFrame(id));
    animations.forEach(animation => animation.cancel());
  }, { once: true });
}
