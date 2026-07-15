import type { Metadata } from "next";
import TurionLanding from "./TurionLanding";

export const metadata: Metadata = {
  title: { absolute: "Turion Global | Estratégia financeira por setores" },
  description:
    "Advisory internacional para empresas da economia da experiência e do bem-estar. Estratégia, preparação e conexão com parceiros qualificados.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return <TurionLanding />;
}
