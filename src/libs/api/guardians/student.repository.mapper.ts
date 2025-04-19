import { Guardian } from "@/features/guardian/model/guardian.model";
import { CriarResponsavelDTO, ResponsavelDTO } from "./guardian.repository.dto";
import { statusMapper } from "@/shared/mappers/status.mapper";
import { addressMapper } from "@/shared/mappers/address.mapper";

export const guardianMapper = {
	fromApi(dto: ResponsavelDTO): Guardian {
		return {
			id: dto.id,
			name: dto.nome,
			phone: dto.telefone,
			cpf: dto.cpf,
			birthDate: dto.dataNascimento,
			address: addressMapper.fromApi(dto.endereco),
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
			endereco: addressMapper.toApi(guardian.address),
		};
	},
};
