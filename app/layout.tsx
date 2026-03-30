import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "João Victor | DevOps Engineer Portfolio",
  description:
    "Portfolio profissional de João Victor com foco em DevOps, cloud, containers, CI/CD, infraestrutura como código e observabilidade.",
  keywords: [
    "João Victor",
    "DevOps Engineer",
    "Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "CI/CD",
    "Observability",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "João Victor | DevOps Engineer Portfolio",
    description:
      "Portfolio moderno e responsivo para processos seletivos em DevOps, cloud e automação.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
