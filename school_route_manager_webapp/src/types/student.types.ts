export type StudentStatus = "Ativo" | "Inativo";

export type Student = {
  name: string;
  email: string;
  cpf: string;
  matricula: string;
  turno: string;
  escola: string;
  endereco: string;
  telefone: string;
  status: StudentStatus;
};
