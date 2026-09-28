import type { Metadata } from "next";
import { HomePage } from "../../src/mifer/MiferSite";

export const metadata: Metadata = {
  title: { absolute: "Mifer Digital | Web Design, SEO & Digital Visibility" },
  description: "Mifer Digital creates distinctive websites, SEO foundations and Google visibility systems for ambitious businesses.",
  alternates: {
    canonical: "/en",
    languages: { tr: "/", en: "/en" },
  },
  openGraph: {
    locale: "en_US",
    title: "Mifer Digital | Web Design, SEO & Digital Visibility",
    description: "Web design, SEO and digital visibility systems by Mifer Digital.",
    url: "/en",
  },
};

export default function Page() {
  return <HomePage lang="en" />;
}
