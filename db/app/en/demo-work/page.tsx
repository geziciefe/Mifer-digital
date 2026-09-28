import type { Metadata } from "next";
import { WorkPage } from "../../../src/mifer/MiferSite";

export const metadata: Metadata = {
  title: "Demo Work",
  description: "Selected digital concepts developed by Mifer Digital across different industries.",
  alternates: {
    canonical: "/en/demo-work",
    languages: { tr: "/demo-calismalar", en: "/en/demo-work" },
  },
};

export default function Page() {
  return <WorkPage lang="en" />;
}
