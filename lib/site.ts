export const SITE = {
  name: "Alves Jatobá Creative Studio",
  shortName: "Alves Jatobá",
  tagline: "Creative Studio",
  city: "Porto",
  addressLine: "Rua de Dom João IV 252, 4000-298 Porto",
  instagramHandle: "alvesjatoba.cs",
  instagramUrl: "https://www.instagram.com/alvesjatoba.cs/",
  behanceUrl: "https://www.behance.net/jatobaphotos",
  whatsappNumber: "351912117146",
} as const;

export function whatsappHref(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export const WHATSAPP_MENSAGEM_GERAL =
  "Olá, vi o site da Alves Jatobá Creative Studio e quero marcar um projecto.";

export const WHATSAPP_MENSAGEM_PRECOS =
  "Olá, vi os serviços e preços no site e quero pedir um orçamento.";
