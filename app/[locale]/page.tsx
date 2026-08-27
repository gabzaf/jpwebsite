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
        <section className="servicos-intro">
          <h2 className="titulo-principal">{dict.servicesTitle}</h2>
          <p>{dict.servicesIntro}</p>
        </section>

        <ServicosLista copy={dict.services} />

        <div className="faixa-cta">
          <p>{dict.ctaAfterPrices}</p>
          <WhatsAppButton message={dict.whatsappPricesMessage}>{dict.whatsappPrices}</WhatsAppButton>
        </div>

        <section className="mapa">
          <h2 className="titulo-principal">{dict.portoTitle}</h2>
          <p>
            {SITE.addressLine}.{" "}
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
              @{SITE.instagramHandle}
            </a>
          </p>
          <div className="mapa-conteudo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3460982355164!2d-8.603425428654784!3d41.14879869103593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464ee342a6ebf%3A0xb06d2dfffc911ba6!2sR.%20de%20Dom%20Jo%C3%A3o%20IV%20252%2C%204000-298%20Porto!5e0!3m2!1sen!2spt!4v1646055498500!5m2!1sen!2spt"
              title={dict.mapTitle}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </>
  );
}
