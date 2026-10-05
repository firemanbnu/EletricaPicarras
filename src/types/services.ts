export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: "zap" | "wrench" | "lightbulb" | "plug" | "shield";
};

export const SERVICES: Service[] = [
  {
    id: "instalacao",
    title: "Instalação Elétrica",
    description:
      "Novas instalações, tomadas, disjuntores e quadros de energia.",
    image: "/images/instalacao.jpg",
    icon: "zap",
  },
  {
    id: "reparo",
    title: "Reparos e Manutenção",
    description: "Vazamentos de corrente, curtos, falhas e revisões.",
    image: "/images/reparo.jpg",
    icon: "wrench",
  },
  {
    id: "iluminacao",
    title: "Iluminação",
    description: "Pontos de luz, LED, embutidos e sensores.",
    image: "/images/iluminacao.jpg",
    icon: "lightbulb",
  },
  {
    id: "tomadas",
    title: "Tomadas e Circuitos",
    description: "Aumento de carga, aterramento e organização de circuitos.",
    image: "/images/tomadas.jpg",
    icon: "plug",
  },
  {
    id: "projeto",
    title: "Projetos e Adequações",
    description: "Adequação à NR10/legislação e projetos residenciais.",
    image: "/images/projeto.jpg",
    icon: "shield",
  },
];

export type OrderForm = {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceId: string;
  description: string;
};