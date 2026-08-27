"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="aviso-formulario" tabIndex={-1}>
        <p>Obrigado pela mensagem. Entraremos em contacto em breve para combinar a sessão.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="nomesobrenome">Nome e apelido</label>
      <input
        type="text"
        id="nomesobrenome"
        name="nome"
        className="input-padrao"
        required
        autoComplete="name"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="input-padrao"
        required
        placeholder="seuemail@dominio.com"
        autoComplete="email"
      />

      <label htmlFor="telemovel">Telemóvel</label>
      <input
        type="tel"
        id="telemovel"
        name="telemovel"
        className="input-padrao"
        required
        placeholder="XXX XXX XXX"
        autoComplete="tel"
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        cols={80}
        rows={8}
        id="mensagem"
        name="mensagem"
        className="input-padrao"
        required
      />

      <fieldset>
        <legend>Qual a vossa preferência de contacto?</legend>
        <label htmlFor="radio-email">
          <input type="radio" name="contato" value="email" id="radio-email" defaultChecked /> Email
        </label>
        <label htmlFor="radio-chamada">
          <input type="radio" name="contato" value="chamada" id="radio-chamada" /> Chamada telemóvel
        </label>
        <label htmlFor="radio-whatsapp">
          <input type="radio" name="contato" value="whatsapp" id="radio-whatsapp" /> WhatsApp
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="horario">Qual o horário para contacto?</label>
        <select id="horario" name="horario">
          <option>Manhã</option>
          <option>Tarde</option>
          <option>Noite</option>
        </select>
      </fieldset>

      <label className="checkbox">
        <input type="checkbox" name="novidades" defaultChecked /> Gostava de receber as nossas
        novidades
      </label>
      <button type="submit" className="submeter">
        Submeter mensagem
      </button>
    </form>
  );
}
