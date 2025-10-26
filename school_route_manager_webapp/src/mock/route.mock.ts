import type { Route } from "../types/route.types";

export const studentOptions = [
  { value: "student-1", label: "João Silva" },
  { value: "student-2", label: "Maria Oliveira" },
  { value: "student-3", label: "Carlos Pereira" },
  { value: "student-4", label: "Ana Costa" },
  { value: "student-5", label: "Fernanda Souza" },
];

export const stopOptions = [
  { value: "stop-1", label: "Rua das Flores, 123", lat: -23.5505, lng: -46.6333 },
  { value: "stop-2", label: "Av. Principal, 456", lat: -23.5555, lng: -46.6383 },
  { value: "stop-3", label: "Praça Central, 789", lat: -23.5605, lng: -46.6433 },
  { value: "stop-4", label: "Escola Municipal", lat: -23.5655, lng: -46.6483 },
];

export const periodicityOptions = [
  { value: "daily", label: "Diariamente" },
  { value: "weekdays", label: "Segunda a Sexta" },
  { value: "weekends", label: "Fins de Semana" },
];

export const initialRoutes: Route[] = [
  {
    id: "route-1",
    name: "Rota Matutina",
    startStopId: "stop-1",
    endStopId: "stop-3",
    startTime: "07:00",
    endTime: "08:30",
    periodicity: "weekdays",
    selectedStudents: ["student-1", "student-2", "student-3", "student-4"],
    stopSequence: ["stop-1", "stop-2", "stop-3"],
  },
  {
    id: "route-2",
    name: "Rota Vespertina",
    startStopId: "stop-2",
    endStopId: "stop-4",
    startTime: "15:00",
    endTime: "16:30",
    periodicity: "weekdays",
    selectedStudents: ["student-2", "student-5"],
    stopSequence: ["stop-2", "stop-4"],
  },
  {
    id: "route-3",
    name: "Rota Noturna",
    startStopId: "stop-1",
    endStopId: "stop-3",
    startTime: "20:00",
    endTime: "21:30",
    periodicity: "daily",
    selectedStudents: ["student-1", "student-3"],
    stopSequence: ["stop-1", "stop-3"],
  },
];
