export type Servico = {
  id: "foto" | "design";
  precos: string[];
};

export const SERVICOS: Servico[] = [
  {
    id: "foto",
    precos: ["90 €", "80 €", "120 €"],
  },
  {
    id: "design",
    precos: [
      "15 €",
      "108 €",
      "125 €",
      "144 €",
      "157 €",
      "25 €",
      "187 €",
      "258 €",
      "40 €",
      "55 €",
      "30 €",
      "a partir de 120 €",
    ],
  },
];
