import type { Metadata } from "next";
import TurionSite from "../TurionSite";
import { sites } from "../site-config";

export const metadata: Metadata = {
  title: { absolute: "Turion Health | Inteligência de capital para saúde e longevidade" },
  description: "Inteligência de capital para clínicas, grupos médicos, estética, cosméticos, farmacêutica e medtech.",
  robots: { index: false, follow: false },
};

export default function HealthPage() {
  return <TurionSite site={sites.health} />;
}
