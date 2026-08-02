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
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      shortcut: "/favicon-32.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "TURION",
      title: "TURION | Advisory & Capital",
      description:
        "Inteligência setorial, preparação de oportunidades e interlocução institucional em Travel, Fitness e Health.",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "TURION. Advisory & Capital." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "TURION | Advisory & Capital",
      description:
        "Inteligência setorial, preparação de oportunidades e interlocução institucional em Travel, Fitness e Health.",
      images: ["/og.png"],
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
