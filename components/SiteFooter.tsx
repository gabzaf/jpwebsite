import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

type Props = {
  locale?: string;
};

export function SiteFooter({ locale }: Props) {
  return (
    <footer>
      <div className="footer-image">
        <Logo href={locale ? `/${locale}` : "/"} />
        <p className="copyright">
          Copyright &copy; {SITE.name} — 2026 ·{" "}
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
            @{SITE.instagramHandle}
          </a>
        </p>
      </div>
    </footer>
  );
}
