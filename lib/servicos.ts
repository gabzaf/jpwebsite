export type Servico = {
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
  alt: string;
};

export const SERVICOS: Servico[] = [
  {
    titulo: "Foto",
    descricao:
      "Sessão profissional de retrato ou autoral, com direcção e uma selecção editada.",
    preco: "100 € / 1 hora",
    imagem: "/quinta.jpg",
    alt: "Sessão fotográfica de paisagem",
  },
  {
    titulo: "Retouch",
    descricao:
      "Correcção de cor, contraste e detalhe para impressão ou publicação digital.",
    preco: "28 € por fotografia",
    imagem: "/utensilios-fotografo.jpg",
    alt: "Tratamento de imagem e equipamento fotográfico",
  },
  {
    titulo: "Design",
    descricao:
      "Identidade, cartazes e artes para redes, alinhadas com o universo da fotografia.",
    preco: "30 € / 15 artes",
    imagem: "/sexta.jpg",
    alt: "Peças de design e câmaras clássicas",
  },
];
