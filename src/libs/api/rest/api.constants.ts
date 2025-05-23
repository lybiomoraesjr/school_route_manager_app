export const API_ROUTES = {
	GUARDIANS: "/responsaveis",
	STUDENTS: "/alunos",
	VEHICLES: "/veiculos",
	GUARDIAN_BY_ID: (id: string) => `/responsaveis/${id}`,
	STUDENT_BY_ID: (id: string) => `/alunos/${id}`,
	VEHICLE_BY_ID: (id: string) => `/veiculos/${id}`,
};
