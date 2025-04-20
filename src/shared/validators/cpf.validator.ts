import { cleanCpf } from "@/shared/utils/format.utils";

export const isValidCpf = (cpf: string): boolean => {
	const unmasked = cleanCpf(cpf);

	if (unmasked.length !== 11 || /^(\d)\1+$/.test(unmasked)) return false;

	const calcDigit = (factor: number) => {
		let total = 0;
		for (let i = 0; i < factor - 1; i++) {
			total += parseInt(unmasked[i]) * (factor - i);
		}
		const remainder = total % 11;
		return remainder < 2 ? 0 : 11 - remainder;
	};

	const digit1 = calcDigit(10);
	const digit2 = calcDigit(11);

	return (
		digit1 === parseInt(unmasked[9]) && digit2 === parseInt(unmasked[10])
	);
};
