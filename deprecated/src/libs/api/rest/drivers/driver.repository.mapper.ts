import { MotoristaDTO, CriarMotoristaDTO } from "./driver.repository.dto";
import { statusMapper } from "@/shared/mappers/rest/status.mapper";
import { addressMapper } from "@/shared/mappers/rest/address.mapper";
import { Driver } from "@/features/driver/model/driver.schema";

export const driverMapper = {
	fromApi(dto: MotoristaDTO): Driver {
		return {
			id: dto.id,
			name: dto.nome,
			cpf: dto.cpf,
			birthDate: new Date(dto.dataNascimento),
			cnh: dto.cnh,
			contact: {
				phone: dto.telefone,
				cellphone: dto.telefone,
				email: dto.email,
			},
			address: addressMapper.fromApi(dto.endereco),
			status: statusMapper.fromApi(dto.status),
		};
	},

	toApi(model: Driver): CriarMotoristaDTO {
		return {
			nome: model.name,
			cpf: model.cpf,
			dataNascimento: model.birthDate.toISOString(),
			telefone: model.contact.phone,
			endereco: addressMapper.toApi(model.address),
			status: statusMapper.toApi(model.status),
			cnh: model.cnh,
			email: model.contact.email,
		};
	},
};
