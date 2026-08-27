import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicosLista } from "@/components/ServicosLista";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "pt");
  return {
    title: { absolute: SITE.name },
    description: dict.metaDescription,
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <section className="banner">
        <div className="banner-texto">
          <p className="kicker">{dict.kicker}</p>
          <h1>{dict.headline}</h1>
          <p className="promessa">{dict.promise}</p>
          <div className="cta-wrap">
            <WhatsAppButton message={dict.whatsappHeroMessage}>{dict.whatsappHero}</WhatsAppButton>
          </div>
        </div>
      </section>

      <main>
        <section id="servicos" className="servicos-bloco">
          <div className="servicos-intro">
            <h2 className="titulo-principal">
              <a href="#pacotes">{dict.servicesTitle}</a>
            </h2>
            <p>{dict.servicesIntro}</p>
          </div>

          <ServicosLista copy={dict.services} />

          <div className="portefolio">
            <p>{dict.portfolioInvite}</p>
            <p className="portefolio-ligacoes">
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
                {dict.portfolioInstagram}
              </a>
              <span aria-hidden="true">·</span>
              <a href={SITE.behanceUrl} target="_blank" rel="noopener noreferrer">
                {dict.portfolioBehance}
              </a>
            </p>
          </div>

          <div className="faixa-cta">
            <p>{dict.ctaAfterPrices}</p>
            <WhatsAppButton message={dict.whatsappPricesMessage}>{dict.whatsappPrices}</WhatsAppButton>
          </div>
        </section>

        <p className="porto-nota">{dict.portoNote}</p>
      </main>
    </>
  );
}
