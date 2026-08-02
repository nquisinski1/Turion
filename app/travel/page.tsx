import type { Metadata } from "next";
import TurionSite from "../TurionSite";
import { sites } from "../site-config";

export const metadata: Metadata = {
  title: { absolute: "Turion Travel | Inteligência de capital para o turismo" },
  description: "Inteligência de capital para operadoras, hospitalidade, travel tech e fornecedores do turismo.",
  robots: { index: false, follow: false },
};

export default function TravelPage() {
  return <TurionSite site={sites.travel} />;
}
