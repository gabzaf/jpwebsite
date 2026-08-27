import Image from "next/image";
import { SERVICOS } from "@/lib/servicos";

export function ServicosLista() {
  return (
    <ul className="servico">
      {SERVICOS.map((servico) => (
        <li key={servico.titulo}>
          <h2>{servico.titulo}</h2>
          <Image
            src={servico.imagem}
            className="image-servico-photo"
            alt={servico.alt}
            width={640}
            height={180}
          />
          <p className="produto-descricao">{servico.descricao}</p>
          <p className="produto-preco">{servico.preco}</p>
        </li>
      ))}
    </ul>
  );
}
