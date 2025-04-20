export const cleanCpf = (cpf: string): string => {
	return cpf.replace(/\D/g, "");
};
