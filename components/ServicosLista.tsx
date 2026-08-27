import { SERVICOS } from "@/lib/servicos";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  copy: Dictionary["services"];
};

export function ServicosLista({ copy }: Props) {
  return (
    <ul id="pacotes" className="servico">
      {SERVICOS.map((servico, index) => {
        const text = copy[index];
        return (
          <li key={servico.id}>
            <h2>{text.titulo}</h2>
            <p className="produto-descricao">{text.descricao}</p>
            <ul className="precos-lista">
              {text.linhas.map((linha, linhaIndex) => (
                <li key={linha.nome}>
                  <span>
                    <strong>{linha.nome}</strong>
                    {linha.detalhe ? <em>{linha.detalhe}</em> : null}
                  </span>
                  <span className="produto-preco">{servico.precos[linhaIndex]}</span>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
