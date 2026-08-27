import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, LOCALES, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = isLocale(locale) ? locale : "pt";
  const base = "https://alvesjatoba.com";

  return {
    title: {
      default: SITE.name,
      template: `${SITE.name} — %s`,
    },
    alternates: {
      languages: {
        pt: `${base}/pt`,
        en: `${base}/en`,
        "x-default": `${base}/pt`,
      },
    },
    description:
      path === "en"
        ? "Photography and graphic design in Porto. Alves Jatobá Creative Studio."
        : "Fotografia e design gráfico no Porto. Alves Jatobá Creative Studio.",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader locale={locale as Locale} />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
