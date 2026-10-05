export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: "zap" | "wrench" | "lightbulb" | "plug" | "shield";
};

export const SERVICES: Service[] = [
  {
    id: "instalacao",
    title: "Instalação Elétrica",
    description: "Novas instalações, tomadas, disjuntores e quadros.",
    price: 150,
    icon: "zap",
  },
  {
    id: "reparo",
    title: "Reparos e Manutenção",
    description: "Vazamentos de corrente, curtos, falhas e revisões.",
    price: 80,
    icon: "wrench",
  },
  {
    id: "iluminacao",
    title: "Iluminação",
    description: "Pontos de luz, LED, embutidos e sensores.",
    price: 90,
    icon: "lightbulb",
  },
  {
    id: "tomadas",
    title: "Tomadas e Circuitos",
    description: "Aumento de carga, aterramento e organização de circuitos.",
    price: 70,
    icon: "plug",
  },
  {
    id: "projeto",
    title: "Projetos e Adequações",
    description: "Adequação à NR10/legislação e projetos residenciais.",
    price: 250,
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