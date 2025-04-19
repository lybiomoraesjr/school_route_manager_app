import { Student } from "@/features/student/model/student.model";
import { AlunoDTO, CriarAlunoDTO } from "./student.repository.dto";
import { statusMapper } from "@/shared/mappers/status.mapper";
import { addressMapper } from "@/shared/mappers/address.mapper";

export const studentMapper = {
	fromApi(dto: AlunoDTO): Student {
		return {
			id: dto.id,
			name: dto.nome,
			cpf: dto.cpf,
			birthDate: dto.dataNascimento,
			guardianId: dto.guardianId,
			phone: dto.telefone,
			address: addressMapper.fromApi(dto.endereco),
			status: statusMapper.fromApi(dto.status),
		};
	},

	toApi(model: Student): CriarAlunoDTO {
		return {
			nome: model.name,
			cpf: model.cpf,
			dataNascimento: model.birthDate,
			telefone: model.phone,
			endereco: addressMapper.toApi(model.address),
			status: statusMapper.toApi(model.status),
			guardianId: model.guardianId,
		};
	},
};
