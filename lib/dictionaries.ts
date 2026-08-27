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
  ctaAfterPrices: string;
  whatsappPrices: string;
  whatsappPricesMessage: string;
  portoTitle: string;
  mapTitle: string;
  blogSoon: string;
  blogArticle: string;
  langLabel: string;
  services: {
    titulo: string;
    descricao: string;
    alt: string;
  }[];
};

const pt: Dictionary = {
  metaDescription:
    "Fotografia e design gráfico no Porto. Da sessão à identidade visual, com um olhar autoral.",
  kicker: "Porto · Fotografia · Design",
  headline: "Imagens e marcas com carácter.",
  promise:
    "A Alves Jatobá Creative Studio transforma a tua história em fotografia, retouch e identidade visual — com processo claro, preço à vista e entrega cuidada.",
  whatsappHero: "Enviar mensagem no WhatsApp",
  whatsappHeroMessage:
    "Olá, vi o site da Alves Jatobá Creative Studio e quero marcar um projecto.",
  servicesTitle: "Serviços",
  servicesIntro:
    "Pacotes de referência para fotografia, tratamento de imagem e design. Cada projecto pode ser ajustado — fala connosco no WhatsApp.",
  ctaAfterPrices: "Viste o que precisas? Envia uma mensagem e combinamos a sessão ou o briefing.",
  whatsappPrices: "Pedir orçamento no WhatsApp",
  whatsappPricesMessage: "Olá, vi os serviços e preços no site e quero pedir um orçamento.",
  portoTitle: "No Porto",
  mapTitle: "Mapa do estúdio Alves Jatobá Creative Studio no Porto",
  blogSoon: "Em breve publicamos notas sobre sessões, retouch e o processo no estúdio.",
  blogArticle: "Artigo",
  langLabel: "Idioma",
  services: [
    {
      titulo: "Foto",
      descricao: "Sessão profissional de retrato ou autoral, com direcção e uma selecção editada.",
      alt: "Sessão fotográfica de paisagem",
    },
    {
      titulo: "Retouch",
      descricao: "Correcção de cor, contraste e detalhe para impressão ou publicação digital.",
      alt: "Tratamento de imagem e equipamento fotográfico",
    },
    {
      titulo: "Design",
      descricao: "Identidade, cartazes e artes para redes, alinhadas com o universo da fotografia.",
      alt: "Peças de design e câmaras clássicas",
    },
  ],
};

const en: Dictionary = {
  metaDescription:
    "Photography and graphic design in Porto. From the shoot to visual identity, with an authorial eye.",
  kicker: "Porto · Photography · Design",
  headline: "Images and brands with character.",
  promise:
    "Alves Jatobá Creative Studio turns your story into photography, retouching and visual identity — with a clear process, visible pricing and careful delivery.",
  whatsappHero: "Message us on WhatsApp",
  whatsappHeroMessage:
    "Hi, I saw the Alves Jatobá Creative Studio website and I would like to book a project.",
  servicesTitle: "Services",
  servicesIntro:
    "Reference packages for photography, retouching and design. Each project can be tailored — talk to us on WhatsApp.",
  ctaAfterPrices: "See what you need? Send a message and we will arrange the session or briefing.",
  whatsappPrices: "Ask for a quote on WhatsApp",
  whatsappPricesMessage: "Hi, I saw the services and prices on the site and I would like a quote.",
  portoTitle: "In Porto",
  mapTitle: "Map of Alves Jatobá Creative Studio in Porto",
  blogSoon: "Notes on sessions, retouching and studio process will be published here soon.",
  blogArticle: "Article",
  langLabel: "Language",
  services: [
    {
      titulo: "Photo",
      descricao: "A professional portrait or author session, with direction and an edited selection.",
      alt: "Landscape photography session",
    },
    {
      titulo: "Retouch",
      descricao: "Colour, contrast and detail work for print or digital publication.",
      alt: "Image retouching and photographic equipment",
    },
    {
      titulo: "Design",
      descricao: "Identity, posters and social assets, aligned with the photography world.",
      alt: "Design pieces and classic cameras",
    },
  ],
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
