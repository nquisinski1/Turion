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
      default: "Turion Global | Advisory internacional",
      template: "%s | Turion Global",
    },
    description:
      "Assessoria estratégica para empresas da economia da experiência e do bem-estar, conectando oportunidades a instituições e especialistas qualificados.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Turion Global",
      title: "Turion Global | Estratégia financeira por setores",
      description:
        "Assessoria estratégica para preparar e conectar oportunidades empresariais a instituições e especialistas qualificados.",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Turion Global — Estratégia financeira, construída por setores." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Turion Global | Estratégia financeira por setores",
      description:
        "Assessoria estratégica para preparar e conectar oportunidades empresariais a instituições e especialistas qualificados.",
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
