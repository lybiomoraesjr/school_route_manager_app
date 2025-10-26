export type Route = {
  id: string;
  name: string;
  startStopId: string;
  endStopId: string;
  startTime: string;
  endTime: string;
  periodicity: string;
  selectedStudents: string[];
  stopSequence: string[];
};

export type RouteForm = Omit<Route, "id">;
