import { StatusAPI } from "@/shared/types/enums/status-api.enum";

interface BaseAlunoDTO {
	nome: string;
	cpf: string;
	dataNascimento: string;
	telefone: string;
	endereco: {
		rua: string;
		numero: string;
		bairro: string;
		cidade: string;
		cep: string;
		complemento?: string;
	};
	status: StatusAPI;
	guardianId: string;
}

export interface CriarAlunoDTO extends BaseAlunoDTO {}

export interface AlunoDTO extends BaseAlunoDTO {
	id: string;
}
