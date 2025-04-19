import { Address } from "@/shared/models/address.model";

export interface School {
	id: string;
	name: string;
	address: Address;
	phone: string;
	email: string;
}
