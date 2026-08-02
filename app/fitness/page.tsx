import type { Metadata } from "next";
import TurionSite from "../TurionSite";
import { sites } from "../site-config";

export const metadata: Metadata = {
  title: { absolute: "Turion Fitness | Inteligência de capital para a economia do movimento" },
  description: "Inteligência de capital para academias, redes, clubes, distribuidores e fitness tech.",
  robots: { index: false, follow: false },
};

export default function FitnessPage() {
  return <TurionSite site={sites.fitness} />;
}
