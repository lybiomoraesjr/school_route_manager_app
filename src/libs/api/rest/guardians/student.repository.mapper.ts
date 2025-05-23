import { Guardian } from "@/features/guardian/schema/guardian.schema";
import { CriarResponsavelDTO, ResponsavelDTO } from "./guardian.repository.dto";
import { statusMapper } from "@/shared/mappers/rest/status.mapper";
import { addressMapper } from "@/shared/mappers/rest/address.mapper";

export const guardianMapper = {
	fromApi(dto: ResponsavelDTO): Guardian {
		return {
			id: dto.id,
			name: dto.nome,
			contact: {
				phone: dto.telefone,
				cellphone: dto.telefone,
				email: dto.email,
			},
			cpf: dto.cpf,
			birthDate: new Date(dto.dataNascimento),
			address: addressMapper.fromApi(dto.endereco),
			status: statusMapper.fromApi(dto.status),
			guardianId: dto.id,
		};
	},
	toApi(guardian: Guardian): CriarResponsavelDTO {
		return {
			nome: guardian.name,
			telefone: guardian.contact.phone,
			cpf: guardian.cpf,
			dataNascimento: guardian.birthDate.toISOString(),
			status: statusMapper.toApi(guardian.status),
			endereco: addressMapper.toApi(guardian.address),
			email: guardian.contact.email,
		};
	},
};
