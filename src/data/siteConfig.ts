export const siteConfig = {
  brand: 'Mifer Digital',
  brandAliases: ['Mifer', 'Mifer Dijital', 'MiferDigital', 'miferdigital.com'],
  domain: 'miferdigital.com',
  url: 'https://miferdigital.com',
  email: 'iletisim@miferdigital.com',
  location: 'Maltepe, İstanbul',

  // Publish öncesi gerçek Mifer Business numarasını ülke koduyla girin.
  // Örnek format: 905551112233 (başında + olmadan)
  whatsappNumber: '902162350930' as string,

  // Publish öncesi gerçek Instagram profil URL'sini girin.
  // Örnek format: https://www.instagram.com/markaadi/
  instagramUrl: 'https://www.instagram.com/miferdigital/' as string
} as const;

export const pagePath = (pathname: string) => {
  const clean = pathname.split(/[?#]/, 1)[0] || '/';
  return clean === '/' ? '/' : `${clean.replace(/\/+$/, '')}/`;
};

export const pageUrl = (pathname: string) => new URL(pagePath(pathname), `${siteConfig.url}/`).toString();

export const contactLinks = {
  email: `mailto:${siteConfig.email}`,
  whatsapp: siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`
    : null,
  instagram: siteConfig.instagramUrl || null
};

// Compatibility for the archived React/Vinext components that Vite discovers
// during development even though the active website is rendered by Astro.
export const mailtoLink = contactLinks.email;
