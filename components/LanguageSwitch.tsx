import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  label: string;
};

export function LanguageSwitch({ locale, label }: Props) {
  return (
    <nav className="lang-switch" aria-label={label}>
      <Link href="/pt" hrefLang="pt" className={locale === "pt" ? "ativo" : undefined}>
        PT
      </Link>
      <span aria-hidden="true">/</span>
      <Link href="/en" hrefLang="en" className={locale === "en" ? "ativo" : undefined}>
        EN
      </Link>
    </nav>
  );
}
