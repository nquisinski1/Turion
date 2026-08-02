import type { Metadata } from "next";
import TurionHome from "./TurionHome";

export const metadata: Metadata = {
  title: { absolute: "TURION | Advisory & Capital" },
  description:
    "Inteligência setorial, preparação de oportunidades e interlocução institucional em Travel, Fitness e Health.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return <TurionHome />;
}
