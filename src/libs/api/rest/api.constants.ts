export const API_ROUTES = {
	AUTH: "/auth",
	GUARDIANS: "/responsaveis",
	STUDENTS: "/alunos",
	VEHICLES: "/veiculos",
	DRIVERS: "/motoristas",
	GUARDIAN_BY_ID: (id: string) => `/responsaveis/${id}`,
	STUDENT_BY_ID: (id: string) => `/alunos/${id}`,
	VEHICLE_BY_ID: (id: string) => `/veiculos/${id}`,
	DRIVER_BY_ID: (id: string) => `/motoristas/${id}`,
};
