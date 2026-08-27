import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `${SITE.name} — %s`,
  },
  description:
    "Estúdio criativo no Porto: fotografia, retouch e design gráfico. Alves Jatobá Creative Studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
