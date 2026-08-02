import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "TURION | Advisory & Capital",
      template: "%s | Turion",
    },
    description:
      "Inteligência setorial e preparação de oportunidades de capital para empresas de Travel, Fitness e Health.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "TURION",
      title: "TURION | Advisory & Capital",
      description:
        "Inteligência setorial, preparação de oportunidades e interlocução institucional em Travel, Fitness e Health.",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "TURION. Capital com direção." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "TURION | Advisory & Capital",
      description:
        "Inteligência setorial, preparação de oportunidades e interlocução institucional em Travel, Fitness e Health.",
      images: ["/og.jpg"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
