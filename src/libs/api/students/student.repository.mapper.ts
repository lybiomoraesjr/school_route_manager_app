import { Student } from "@/features/student/model/student.model";
import { AlunoDTO, CriarAlunoDTO } from "./student.repository.dto";
import { statusMapper } from "@/shared/mappers/status.mapper";

export const studentMapper = {
	fromApi(dto: AlunoDTO): Student {
		return {
			id: dto.id,
			name: dto.nome,
			cpf: dto.cpf,
			birthDate: dto.dataNascimento,
			guardianId: dto.guardianId,
			phone: dto.telefone,
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

	toApi(model: Student): CriarAlunoDTO {
		return {
			nome: model.name,
			cpf: model.cpf,
			dataNascimento: model.birthDate,
			telefone: model.phone,
			endereco: {
				rua: model.address.street,
				numero: model.address.number,
				bairro: model.address.neighborhood,
				cidade: model.address.city,
				cep: model.address.zipCode,
				complemento: model.address.complement,
			},
			status: statusMapper.toApi(model.status),
			guardianId: model.guardianId,
		};
	},
};
