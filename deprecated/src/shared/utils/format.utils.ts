export const unmaskCpf = (cpf: string): string => cpf.replace(/\D/g, "");
export const unmaskPhone = (phone: string): string => phone.replace(/\D/g, "");
export const unmaskCep = (cep: string): string => cep.replace(/\D/g, "");
