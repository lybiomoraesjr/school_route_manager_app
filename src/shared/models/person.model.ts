import { Address } from "@/shared/models/address.model";
import { Status } from "@/shared/types/enums";

export interface Person {
	id: string;
	name: string;
	phone: string;
	birthDate: string;
	cpf: string;
	address: Address;
	status: Status;
}
