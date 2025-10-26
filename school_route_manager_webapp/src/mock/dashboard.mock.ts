export const dashboardRoutes = [
  {
    name: "Rota Centro 01",
    vehicle: "ABC-1234 (Sprinter)",
    driver: "Carlos Pereira",
    status: "Em andamento",
    partida: "07:00",
    chegada: "08:00",
    statusColor: "yellow",
    actions: ["view", "start"],
  },
  {
    name: "Rota Sul 03",
    vehicle: "DEF-5678 (Van)",
    driver: "Ana Souza",
    status: "Concluída",
    partida: "07:15",
    chegada: "08:10",
    statusColor: "green",
    actions: ["view"],
  },
  {
    name: "Rota Norte 02",
    vehicle: "GHI-9012 (Ônibus)",
    driver: "Mariana Lima",
    status: "Atrasada",
    partida: "07:30",
    chegada: "08:30",
    statusColor: "red",
    actions: ["view"],
  },
  {
    name: "Rota Leste 05",
    vehicle: "JKL-3456 (Van)",
    driver: "Pedro Costa",
    status: "Agendada",
    partida: "07:45",
    chegada: "08:45",
    statusColor: "gray",
    actions: ["view", "start"],
  },
];

export const dashboardSummary = {
  totalRoutes: 12,
  inProgress: 3,
  finished: 5,
  alerts: 1,
};
