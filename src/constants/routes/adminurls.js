export const adminurls = [
  {
    url: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-line",
    subUrl: false,
  },
  {
    url: "/profile",
    name: "Meu Perfil",
    icon: "far fa-user",
    subUrl: false,
  },
  {
    url: "/messages",
    name: "Mensagem",
    icon: "far fa-envelope",
    subUrl: false,
  },
  {
    url: "/mylisting",
    name: "Minha Lista",
    icon: "far fa-list-alt",
    subUrl: false,
  },
  {
    url: "#",
    name: "Lista",
    icon: "fas fa-layer-group",
    subUrl: true,
    subUrls: [
      { url: "/add-listing", name: "Adicionar Lista", icon: "fas fa-plus" },
      { url: "/all-listing", name: "Listas", icon: "far fa-list-alt" },
    ],
  },
  {
    url: "#",
    name: "Funcionarios",
    icon: "fas fa-users",
    subUrl: true,
    subUrls: [
      { url: "/all-agents", name: "Todos Funcionarios", icon: "far fa-list-alt" },
    ],
  },
  {
    url: "change-password",
    name: "Mudar Senha",
    icon: "fas fa-unlock-alt",
    subUrl: false,
  },
  {
    url: "",
    name: "Sair",
    icon: "fas fa-sign-out-alt",
    subUrl: false,
  },
];
