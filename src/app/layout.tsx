import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const SITE_URL = "https://tahakhadraoui.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Taha Khadraoui — DevOps & Cloud Engineer | Freelance",
    template: "%s · Taha Khadraoui",
  },
  description:
    "Freelance DevOps and cloud engineer. AWS and Terraform infrastructure, Kubernetes and CI/CD pipelines, NestJS APIs and Flutter apps — built and shipped end to end. CKAD and AWS certified.",
  keywords: [
    "freelance DevOps engineer",
    "AWS cloud engineer",
    "Terraform consultant",
    "Kubernetes freelance",
    "CKAD certified",
    "NestJS developer",
    "Flutter developer",
    "CI/CD Jenkins ArgoCD",
    "ingénieur DevOps freelance",
    "Taha Khadraoui",
  ],
  authors: [{ name: "Taha Khadraoui" }],
  creator: "Taha Khadraoui",
  openGraph: {
    type: "website",
    siteName: "Taha Khadraoui",
    title: "Taha Khadraoui — DevOps & Cloud Engineer",
    description:
      "I build the app and the cloud it runs on. AWS, Terraform, Kubernetes, NestJS and Flutter — available for freelance projects.",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Khadraoui — DevOps & Cloud Engineer",
    description: "I build the app and the cloud it runs on. Available for freelance projects.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
