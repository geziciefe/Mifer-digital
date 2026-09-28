import type { Metadata } from "next";
import { WorkPage } from "../../src/mifer/MiferSite";

export const metadata: Metadata = {
  title: "Demo Çalışmalar",
  description: "Mifer Digital'in farklı sektörler için geliştirdiği seçili dijital konseptler.",
  alternates: {
    canonical: "/demo-calismalar",
    languages: { tr: "/demo-calismalar", en: "/en/demo-work" },
  },
};

export default function Page() {
  return <WorkPage lang="tr" />;
}
