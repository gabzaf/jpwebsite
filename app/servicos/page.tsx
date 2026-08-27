import type { Metadata } from "next";
import { ServicosLista } from "@/components/ServicosLista";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_MENSAGEM_PRECOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços",
};

export default function ServicosPage() {
  return (
    <main>
      <section className="servicos-intro">
        <h2 className="titulo-principal">Serviços</h2>
        <p>
          Pacotes claros para fotografia, tratamento de imagem e design. Os valores servem de
          referência — cada projecto pode ser ajustado.
        </p>
      </section>

      <ServicosLista />

      <div className="faixa-cta">
        <p>Queres um destes pacotes, ou um orçamento à medida?</p>
        <WhatsAppButton message={WHATSAPP_MENSAGEM_PRECOS}>Enviar mensagem no WhatsApp</WhatsAppButton>
      </div>
    </main>
  );
}
