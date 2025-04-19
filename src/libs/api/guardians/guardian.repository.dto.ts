import { StatusAPI } from "@/shared/types/enums/status-api.enum";

export interface CriarResponsavelDTO {
	nome: string;
	telefone: string;
	cpf: string;
	dataNascimento: string;
	endereco: {
		rua: string;
		numero: string;
		bairro: string;
		cidade: string;
		cep: string;
		complemento?: string;
	};
	status: StatusAPI;
}

export interface ResponsavelDTO extends CriarResponsavelDTO {
	id: string;
}
