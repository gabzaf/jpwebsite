export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type NavHref = (typeof NAV_LINKS)[number]["href"];
