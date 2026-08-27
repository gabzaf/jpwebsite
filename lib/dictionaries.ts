import type { Locale } from "./i18n";

export type Dictionary = {
  metaDescription: string;
  kicker: string;
  headline: string;
  promise: string;
  whatsappHero: string;
  whatsappHeroMessage: string;
  servicesTitle: string;
  servicesIntro: string;
  portfolioInvite: string;
  portfolioInstagram: string;
  portfolioBehance: string;
  ctaAfterPrices: string;
  whatsappPrices: string;
  whatsappPricesMessage: string;
  portoNote: string;
  blogSoon: string;
  blogArticle: string;
  langLabel: string;
  services: {
    titulo: string;
    descricao: string;
    linhas: { nome: string; detalhe?: string }[];
  }[];
};

const pt: Dictionary = {
  metaDescription:
    "Fotografia e design gráfico no Porto. Da sessão às artes, com um olhar autoral.",
  kicker: "Porto · Fotografia · Design",
  headline: "Cada fotografia conta uma história e cada história tem o poder de inspirar a mudança.",
  promise:
    "A Alves Jatobá Creative Studio transforma a tua história em fotografia e design gráfico — com processo claro, preço à vista e entrega cuidada.",
  whatsappHero: "Enviar mensagem no WhatsApp",
  whatsappHeroMessage:
    "Olá, vi o site da Alves Jatobá Creative Studio e quero marcar um projecto.",
  servicesTitle: "Serviços",
  servicesIntro:
    "Pacotes de referência para fotografia e design gráfico. Cada projecto pode ser ajustado — fala connosco no WhatsApp.",
  portfolioInvite: "Antes de marcar, vê o portefólio.",
  portfolioInstagram: "Instagram",
  portfolioBehance: "Behance",
  ctaAfterPrices: "Viste o que precisas? Envia uma mensagem e combinamos a sessão ou o briefing.",
  whatsappPrices: "Pedir orçamento no WhatsApp",
  whatsappPricesMessage: "Olá, vi os serviços e preços no site e quero pedir um orçamento.",
  portoNote: "Sessões no Porto, morada por WhatsApp.",
  blogSoon: "Em breve publicamos notas sobre sessões, retouch e o processo no estúdio.",
  blogArticle: "Artigo",
  langLabel: "Idioma",
  services: [
    {
      titulo: "Foto",
      descricao: "Edição e entrega digital incluídas. Sessões no Porto, com orçamento à medida se precisares de outra duração.",
      linhas: [
        { nome: "Evento por hora", detalhe: "Cobertura" },
        { nome: "Mini-sessão", detalhe: "45 min · até 20 fotos" },
        { nome: "Sessão completa", detalhe: "1h30 · até 50 fotos" },
      ],
    },
    {
      titulo: "Design",
      descricao: "O conteúdo escrito é fornecido pelo cliente. Prazo de entrega a combinar.",
      linhas: [
        { nome: "Post unitário" },
        { nome: "Pacote 8 posts" },
        { nome: "Pacote 10 posts" },
        { nome: "Pacote 12 posts" },
        { nome: "Pacote 15 posts" },
        { nome: "Carrossel" },
        { nome: "Pacote 1", detalhe: "10 peças · 5 posts + 5 carrosséis" },
        { nome: "Pacote 2", detalhe: "15 peças · 9 posts + 6 carrosséis" },
        { nome: "Cartão de visita" },
        { nome: "Flyer" },
        { nome: "Sticker" },
        { nome: "Catálogo" },
      ],
    },
  ],
};

const en: Dictionary = {
  metaDescription:
    "Photography and graphic design in Porto. From the shoot to social and print work, with an authorial eye.",
  kicker: "Porto · Photography · Design",
  headline: "Every picture tells a story and every story has the power to inspire change.",
  promise:
    "Alves Jatobá Creative Studio turns your story into photography and graphic design — with a clear process, visible pricing and careful delivery.",
  whatsappHero: "Message us on WhatsApp",
  whatsappHeroMessage:
    "Hi, I saw the Alves Jatobá Creative Studio website and I would like to book a project.",
  servicesTitle: "Services",
  servicesIntro:
    "Reference packages for photography and graphic design. Each project can be tailored — talk to us on WhatsApp.",
  portfolioInvite: "Before you book, look through the portfolio.",
  portfolioInstagram: "Instagram",
  portfolioBehance: "Behance",
  ctaAfterPrices: "See what you need? Send a message and we will arrange the session or briefing.",
  whatsappPrices: "Ask for a quote on WhatsApp",
  whatsappPricesMessage: "Hi, I saw the services and prices on the site and I would like a quote.",
  portoNote: "Sessions in Porto, address via WhatsApp.",
  blogSoon: "Notes on sessions, retouching and studio process will be published here soon.",
  blogArticle: "Article",
  langLabel: "Language",
  services: [
    {
      titulo: "Photo",
      descricao: "Editing and digital delivery included. Sessions in Porto, with a custom quote if you need a different length.",
      linhas: [
        { nome: "Event coverage, per hour", detalhe: "Coverage" },
        { nome: "Mini-session", detalhe: "45 min · up to 20 photos" },
        { nome: "Full session", detalhe: "1h30 · up to 50 photos" },
      ],
    },
    {
      titulo: "Design",
      descricao: "Written content is supplied by the client. Delivery time to be agreed.",
      linhas: [
        { nome: "Single post" },
        { nome: "Pack of 8 posts" },
        { nome: "Pack of 10 posts" },
        { nome: "Pack of 12 posts" },
        { nome: "Pack of 15 posts" },
        { nome: "Carousel" },
        { nome: "Pack 1", detalhe: "10 pieces · 5 posts + 5 carousels" },
        { nome: "Pack 2", detalhe: "15 pieces · 9 posts + 6 carousels" },
        { nome: "Business card" },
        { nome: "Flyer" },
        { nome: "Sticker" },
        { nome: "Catalogue" },
      ],
    },
  ],
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
