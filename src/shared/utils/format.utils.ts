export const cleanCpf = (cpf: string): string => {
	return cpf.replace(/\D/g, "");
};

export const unmaskPhone = (phone: string) => phone.replace(/\D/g, "");
