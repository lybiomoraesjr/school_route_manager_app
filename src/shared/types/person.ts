import { Address } from "@/shared/types/address";
import { Status } from "@/shared/types/enums";

export type Person = {
	name: string;
	phone: string;
	birthDate: string;
	cpf: string;
	address: Address;
	status: Status;
};
