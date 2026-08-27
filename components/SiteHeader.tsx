import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function SiteHeader({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <header>
      <div className="caixa header-linha">
        <Logo href={`/${locale}`} />
        <LanguageSwitch locale={locale} label={dict.langLabel} />
      </div>
    </header>
  );
}
