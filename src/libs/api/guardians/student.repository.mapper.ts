import { Guardian } from "@/features/guardian/model/guardian.model";
import { CriarResponsavelDTO, ResponsavelDTO } from "./guardian.repository.dto";
import { statusMapper } from "@/shared/mappers/status.mapper";

export const guardianMapper = {
	fromApi(dto: ResponsavelDTO): Guardian {
		return {
			id: dto.id,
			name: dto.nome,
			phone: dto.telefone,
			cpf: dto.cpf,
			birthDate: dto.dataNascimento,
			address: {
				street: dto.endereco.rua,
				number: dto.endereco.numero,
				neighborhood: dto.endereco.bairro,
				city: dto.endereco.cidade,
				zipCode: dto.endereco.cep,
				complement: dto.endereco.complemento,
			},
			status: statusMapper.fromApi(dto.status),
		};
	},
	toApi(guardian: Guardian): CriarResponsavelDTO {
		return {
			nome: guardian.name,
			telefone: guardian.phone,
			cpf: guardian.cpf,
			dataNascimento: guardian.birthDate,
			status: statusMapper.toApi(guardian.status),
			endereco: {
				rua: guardian.address.street,
				numero: guardian.address.number,
				bairro: guardian.address.neighborhood,
				cidade: guardian.address.city,
				cep: guardian.address.zipCode,
				complemento: guardian.address.complement,
			},
		};
	},
};
