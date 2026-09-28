export const pricing = [
  { id: 'care', monthly: 450, discount: 10, revisions: 2, names: { tr: 'Bakım', en: 'Care' } },
  { id: 'maintain', monthly: 1500, discount: 15, revisions: 6, names: { tr: 'Güncel', en: 'Maintain' } },
  { id: 'develop', monthly: 3000, discount: 25, revisions: 12, names: { tr: 'Gelişim', en: 'Develop' } }
] as const;
export function annualPricing(plan: typeof pricing[number]) {
  const total = plan.monthly * 12 * (1 - plan.discount / 100);
  return { total, equivalent: total / 12, savings: plan.monthly * 12 - total };
}
export const annualUpgrade = annualPricing(pricing[2]).equivalent - annualPricing(pricing[1]).equivalent;
