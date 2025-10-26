import { EnderecoDTO } from "@/shared/dtos/rest/address.dto";
import { StatusAPI } from "@/shared/types/enums/status-api.enum";

interface BaseMotoristaDTO {
	nome: string;
	cpf: string;
	dataNascimento: string;
	telefone: string;
	endereco: EnderecoDTO;
	status: StatusAPI;
	cnh: string;
	email: string;
}

export interface CriarMotoristaDTO extends BaseMotoristaDTO {}

export interface MotoristaDTO extends BaseMotoristaDTO {
	id: string;
}
