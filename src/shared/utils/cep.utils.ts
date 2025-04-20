import axios from "axios";

export const fetchAddressByCep = async (cep: string) => {
	const unmaskedCep = cep.replace(/\D/g, "");
	if (unmaskedCep.length !== 8) throw new Error("CEP inválido");

	try {
		const { data } = await axios.get(
			`https://viacep.com.br/ws/${unmaskedCep}/json/`
		);

		if (data.erro) throw new Error("CEP não encontrado");

		return {
			street: data.logradouro,
			neighborhood: data.bairro,
			city: data.localidade,
			state: data.uf,
		};
	} catch (error) {
		throw new Error("Error searching for zip code");
	}
};
