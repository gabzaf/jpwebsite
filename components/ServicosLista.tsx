import Image from "next/image";
import { SERVICOS } from "@/lib/servicos";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  copy: Dictionary["services"];
};

export function ServicosLista({ copy }: Props) {
  return (
    <ul className="servico">
      {SERVICOS.map((servico, index) => {
        const text = copy[index];
        return (
          <li key={servico.preco}>
            <h2>{text.titulo}</h2>
            <Image
              src={servico.imagem}
              className="image-servico-photo"
              alt={text.alt}
              width={640}
              height={180}
            />
            <p className="produto-descricao">{text.descricao}</p>
            <p className="produto-preco">{servico.preco}</p>
          </li>
        );
      })}
    </ul>
  );
}
