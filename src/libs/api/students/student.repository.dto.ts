import { EnderecoDTO } from "@/shared/dtos/address.dto";
import { StatusAPI } from "@/shared/types/enums/status-api.enum";

interface BaseAlunoDTO {
	nome: string;
	cpf: string;
	dataNascimento: string;
	telefone: string;
	endereco: EnderecoDTO;
	status: StatusAPI;
	guardianId: string;
}

export interface CriarAlunoDTO extends BaseAlunoDTO {}

export interface AlunoDTO extends BaseAlunoDTO {
	id: string;
}
