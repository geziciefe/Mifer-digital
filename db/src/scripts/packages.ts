import { pricing, annualPricing, annualUpgrade } from '../data/pricing';
export function initPackages(signal: AbortSignal, reducedMotion: boolean, _saveData: boolean) {
  const section = document.querySelector<HTMLElement>('[data-packages]');
  if (!section) return;
  const tr = section.dataset.lang === 'tr';
  const f = (n: number) => new Intl.NumberFormat(tr ? 'tr-TR' : 'en-GB').format(n);
  section.querySelectorAll<HTMLInputElement>('[name="package-period"]').forEach(input => input.addEventListener('change', () => {
    if (!input.checked) return;
    const annual = input.value === 'annual';
    section.dataset.period = input.value;
    section.querySelectorAll<HTMLElement>('[data-plan]').forEach(card => {
      const plan = pricing.find(p => p.id === card.dataset.plan)!;
      const price = annualPricing(plan);
      card.querySelector('[data-plan-price]')!.textContent = `${f(annual ? price.equivalent : plan.monthly)} TL`;
      card.querySelector('[data-plan-unit]')!.textContent = annual ? (tr ? '/ay karşılığı' : '/month equivalent') : (tr ? '/ay' : '/month');
      card.querySelector('[data-plan-payment]')!.textContent = annual ? `${f(price.total)} TL · ${tr ? 'yıllık peşin ödeme' : 'paid annually, upfront'}` : (tr ? 'Aylık ödeme' : 'Billed monthly');
      card.querySelector('[data-plan-discount]')!.textContent = tr ? `Yıllık %${plan.discount} avantaj` : `${plan.discount}% annual saving`;
      card.querySelector('[data-plan-saving]')!.textContent = tr ? `Yılda ${f(price.savings)} TL tasarruf` : `Save TL ${f(price.savings)} per year`;
      const comparison = card.querySelector('[data-plan-comparison]');
      if (comparison) comparison.textContent = tr ? `Güncel’e göre aylık karşılığı ${f(annualUpgrade)} TL farkla daha kapsamlı destek.` : `More comprehensive support for TL ${f(annualUpgrade)} more per month equivalent than Maintain.`;
      card.querySelector<HTMLElement>('[data-plan-cta]')!.dataset.package = `${plan.names[tr ? 'tr' : 'en']} — ${annual ? `${f(price.total)} TL/${tr ? 'yıl, yıllık peşin ödeme' : 'year, annual upfront billing'} (${f(price.equivalent)} TL/${tr ? 'ay karşılığı' : 'month equivalent'})` : `${f(plan.monthly)} TL/${tr ? 'ay, aylık ödeme' : 'month, monthly billing'}`}`;
      card.querySelectorAll<HTMLElement>('[data-annual-only]').forEach(el => { el.hidden = !annual; });
      if (!reducedMotion) card.querySelector('.package-price-area')?.animate([{ opacity: .4, transform: 'translateY(3px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240, easing: 'ease-out' });
    });
  }, { signal }));
}
