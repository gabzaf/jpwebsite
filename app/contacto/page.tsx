import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WHATSAPP_MENSAGEM_GERAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <main>
      <div className="contacto-pagina">
        <div>
          <h2 className="titulo-principal">Contacto</h2>
          <p className="contacto-intro">
            O caminho mais rápido é o WhatsApp. O formulário também chega.
          </p>
          <div className="cta-wrap">
            <WhatsAppButton message={WHATSAPP_MENSAGEM_GERAL}>Enviar mensagem no WhatsApp</WhatsAppButton>
          </div>
          <ContactForm />
        </div>

        <aside className="info-contacto">
          <h2>Horário e morada</h2>
          <p>
            {SITE.addressLine}
            <br />
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
              @{SITE.instagramHandle}
            </a>
          </p>
          <table className="horario">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda a sexta</td>
                <td>9h às 17h</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>10h às 14h</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>Encerrado</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </main>
  );
}
