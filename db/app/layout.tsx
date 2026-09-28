import type { Metadata, Viewport } from "next";
import { siteConfig } from "../src/data/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: "%s | Mifer Digital",
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.brandName,
  authors: [{ name: siteConfig.brandName, url: siteConfig.siteUrl }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  keywords: [
    "web sitesi tasarımı",
    "SEO altyapısı",
    "Google görünürlüğü",
    "Google Maps optimizasyonu",
    "Maltepe web tasarım",
    "Mifer Digital",
  ],
  alternates: {
    canonical: "/",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: siteConfig.brandName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mifer Digital — İşletmenizi dijitalde güçlü gösteren web siteleri.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/brand/favicon-32.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/brand/favicon-32.png",
    apple: "/brand/favicon-192.png",
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#02142f" },
  ],
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brandName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/brand/mifer-digital-logo.png`,
  email: siteConfig.email,
  telephone: "+90 216 235 09 30",
  sameAs: ["https://www.instagram.com/miferdigital/"],
  areaServed: [
    { "@type": "City", name: "İstanbul" },
    { "@type": "Country", name: "Türkiye" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "project inquiries",
    availableLanguage: ["Turkish", "English"],
  },
  knowsAbout: [
    "Web sitesi tasarımı ve geliştirme",
    "Arama motoru optimizasyonu",
    "Google İşletme Profili düzenleme",
    "Yerel dijital görünürlük",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">Ana içeriğe geç</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
