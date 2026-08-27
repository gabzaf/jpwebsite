import type { Metadata } from "next";
import { ServicosLista } from "@/components/ServicosLista";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WHATSAPP_MENSAGEM_GERAL, WHATSAPP_MENSAGEM_PRECOS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.name },
  description:
    "Fotografia e design gráfico no Porto. Da sessão à identidade visual, com um olhar autoral.",
};

export default function HomePage() {
  return (
    <>
      <section className="banner">
        <div className="banner-texto">
          <p className="kicker">Porto · Fotografia · Design</p>
          <h1>Imagens e marcas com carácter.</h1>
          <p className="promessa">
            A {SITE.name} transforma a tua história em fotografia, retouch e identidade visual —
            com processo claro, preço à vista e entrega cuidada.
          </p>
          <div className="cta-wrap">
            <WhatsAppButton message={WHATSAPP_MENSAGEM_GERAL}>Enviar mensagem no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <main>
        <section className="servicos-intro">
          <h2 className="titulo-principal">Serviços</h2>
          <p>
            Pacotes de referência para fotografia, tratamento de imagem e design. Cada projecto
            pode ser ajustado — fala connosco no WhatsApp.
          </p>
        </section>

        <ServicosLista />

        <div className="faixa-cta">
          <p>Viste o que precisas? Envia uma mensagem e combinamos a sessão ou o briefing.</p>
          <WhatsAppButton message={WHATSAPP_MENSAGEM_PRECOS}>Pedir orçamento no WhatsApp</WhatsAppButton>
        </div>

        <section className="mapa">
          <h2 className="titulo-principal">No Porto</h2>
          <p>
            {SITE.addressLine}.{" "}
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
              @{SITE.instagramHandle}
            </a>
          </p>
          <div className="mapa-conteudo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3460982355164!2d-8.603425428654784!3d41.14879869103593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464ee342a6ebf%3A0xb06d2dfffc911ba6!2sR.%20de%20Dom%20Jo%C3%A3o%20IV%20252%2C%204000-298%20Porto!5e0!3m2!1sen!2spt!4v1646055498500!5m2!1sen!2spt"
              title={`Mapa do estúdio ${SITE.name} no Porto`}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </>
  );
}
