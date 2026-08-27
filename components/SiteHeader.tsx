"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";
import { Logo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <div className="caixa header-linha">
        <Logo />
        <nav>
          <ul>
            {NAV_LINKS.map((item) => {
              const ativo = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link className={ativo ? "ativo" : undefined} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
