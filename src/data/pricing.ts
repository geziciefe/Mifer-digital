import { contactLinks } from './siteConfig';

export const pricing = [
  { id: 'care', monthly: 400, annualEquivalent: 350, updates: 0, names: { tr: 'Web', en: 'Web' } },
  { id: 'current', monthly: 1600, annualEquivalent: 1200, updates: 3, names: { tr: 'Takip', en: 'Takip' } },
  { id: 'mifer', monthly: 15200, annualEquivalent: 9900, updates: null, names: { tr: 'Mifer', en: 'Mifer' } }
] as const;
export function annualPricing(plan: typeof pricing[number]) {
  const total = plan.annualEquivalent * 12;
  const exactDiscount = (1 - plan.annualEquivalent / plan.monthly) * 100;
  return { total, equivalent: plan.annualEquivalent, savings: plan.monthly * 12 - total, discount: plan.id === 'mifer' ? Math.round(exactDiscount) : Math.round(exactDiscount * 10) / 10 };
}

export function planWhatsAppLink(plan: typeof pricing[number], lang: 'tr' | 'en', annual: boolean) {
  const tr = lang === 'tr';
  const f = (value: number) => new Intl.NumberFormat(tr ? 'tr-TR' : 'en-GB').format(value);
  const price = annualPricing(plan);
  const payment = annual
    ? (tr ? `yıllık peşin ödeme: ${f(price.total)} TL (${f(price.equivalent)} TL/ay karşılığı)` : `annual upfront billing: TL ${f(price.total)} (TL ${f(price.equivalent)}/month equivalent)`)
    : (tr ? `aylık ödeme: ${f(plan.monthly)} TL/ay` : `monthly billing: TL ${f(plan.monthly)}/month`);
  const message = tr ? `Merhaba, ${plan.names.tr} paketi hakkında görüşmek istiyorum. Seçimim: ${payment}.` : `Hello, I would like to discuss the ${plan.names.en} plan. My selection: ${payment}.`;
  return `${contactLinks.whatsapp}?text=${encodeURIComponent(message)}`;
}
