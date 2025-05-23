import { AlunoDTO, CriarAlunoDTO } from "./student.repository.dto";
import { statusMapper } from "@/shared/mappers/rest/status.mapper";
import { addressMapper } from "@/shared/mappers/rest/address.mapper";
import { Student } from "@/features/student/schema/student.schema";

export const studentMapper = {
	fromApi(dto: AlunoDTO): Student {
		return {
			id: dto.id,
			name: dto.nome,
			cpf: dto.cpf,
			birthDate: new Date(dto.dataNascimento),
			guardianId: dto.guardianId,
			contact: {
				phone: dto.telefone,
				cellphone: dto.telefone,
				email: dto.email,
			},
			address: addressMapper.fromApi(dto.endereco),
			status: statusMapper.fromApi(dto.status),
		};
	},

	toApi(model: Student): CriarAlunoDTO {
		return {
			nome: model.name,
			cpf: model.cpf,
			dataNascimento: model.birthDate.toISOString(),
			telefone: model.contact.phone,
			endereco: addressMapper.toApi(model.address),
			status: statusMapper.toApi(model.status),
			guardianId: model.guardianId,
			email: model.contact.email,
		};
	},
};
