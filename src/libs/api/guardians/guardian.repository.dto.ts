import { EnderecoDTO } from "@/shared/dtos/address.dto";
import { StatusAPI } from "@/shared/types/enums/status-api.enum";

interface BaseResponsavelDTO {
	nome: string;
	telefone: string;
	cpf: string;
	dataNascimento: string;
	endereco: EnderecoDTO;
	status: StatusAPI;
}

export interface CriarResponsavelDTO extends BaseResponsavelDTO {}

export interface ResponsavelDTO extends CriarResponsavelDTO {
	id: string;
}
