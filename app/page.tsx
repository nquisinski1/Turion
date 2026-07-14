import type { Metadata } from "next";
import TurionLanding from "./TurionLanding";

export const metadata: Metadata = {
  title: { absolute: "Turion Global | Sector-native capital businesses" },
  description:
    "Turion Global is the parent brand for sector-specialist businesses built with experienced operating partners.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return <TurionLanding />;
}
