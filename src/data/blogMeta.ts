import type { Locale } from './i18n';

export const blogGuideMeta = [
  { art: '/blog/website-instagram.svg', category: { tr: 'WEB SİTESİ', en: 'WEBSITE' } },
  { art: '/blog/seo-small-business.svg', category: { tr: 'SEO', en: 'SEO' } },
  { art: '/blog/google-business.svg', category: { tr: 'GOOGLE HARİTALAR', en: 'GOOGLE MAPS' } },
  { art: '/blog/digitalisation.svg', category: { tr: 'ARAŞTIRMA', en: 'RESEARCH' } },
  { art: '/blog/web-design.svg', category: { tr: 'WEB TASARIMI', en: 'WEB DESIGN' } },
  { art: '/blog/core-web-vitals.svg', category: { tr: 'PERFORMANS', en: 'PERFORMANCE' } },
  { art: '/blog/mobile-web.svg', category: { tr: 'MOBİL', en: 'MOBILE' } },
  { art: '/blog/seo-timeline.svg', category: { tr: 'SEO', en: 'SEO' } }
] satisfies { art: string; category: Record<Locale, string> }[];

export function getGuideMeta(index: number, lang: Locale) {
  const fallback = blogGuideMeta[index % blogGuideMeta.length] ?? blogGuideMeta[0];
  return { art: fallback.art, category: fallback.category[lang] };
}

export function readingMinutes(paragraphs: string[]) {
  const words = paragraphs.join(' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 190));
}
