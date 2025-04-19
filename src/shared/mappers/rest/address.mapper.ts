import { EnderecoDTO } from "@/shared/dtos/rest/address.dto";
import { Address } from "@/shared/schemas";

export const addressMapper = {
	fromApi(dto: EnderecoDTO): Address {
		return {
			street: dto.rua,
			number: dto.numero,
			neighborhood: dto.bairro,
			city: dto.cidade,
			zipCode: dto.cep,
			complement: dto.complemento,
		};
	},

	toApi(address: Address): EnderecoDTO {
		return {
			rua: address.street,
			numero: address.number,
			bairro: address.neighborhood,
			cidade: address.city,
			cep: address.zipCode,
			complemento: address.complement,
		};
	},
};
