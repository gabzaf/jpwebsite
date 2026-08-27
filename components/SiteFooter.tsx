import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-image">
        <Logo />
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
