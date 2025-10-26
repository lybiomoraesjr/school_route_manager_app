import { unmaskPhone } from "@/shared/utils/format.utils";

export const isValidCellPhone = (phone: string): boolean => {
	const digits = unmaskPhone(phone);
	return /^\d{11}$/.test(digits);
};

export const isValidPhone = (phone: string): boolean => {
	const digits = unmaskPhone(phone);
	return /^\d{10}$/.test(digits);
};
