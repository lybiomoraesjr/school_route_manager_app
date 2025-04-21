import { PostalCodeInput } from "@/shared/components/form/inputs/PostalCodeInput";
import { AddressSchema } from "@/shared/schemas";
import { fetchAddressByCep } from "@/shared/utils/cep.utils";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { Select, TextInput } from "@mantine/core";
import { useEffect } from "react";
import { BRAZILIAN_STATES } from "@/shared/constants/br-states.constants";
import { unmaskCep } from "@/shared/utils/format.utils";
import { notifyError } from "@/shared/utils/notification.utils";

export const AddressFields = ({
	form,
	readOnly = false,
}: {
	form: any;
	readOnly?: boolean;
}) => {
	useEffect(() => {
		const zipCode = form.values.zipCode;

		const fetchAndFillAddress = async () => {
			const unmasked = unmaskCep(zipCode);
			if (!unmasked || unmasked.length !== 8) return;

			try {
				const data = await fetchAddressByCep(unmasked);

				form.setValues((prev: any) => ({
					...prev,
					street: data.street,
					neighborhood: data.neighborhood,
					city: data.city,
					state: data.state,
				}));
			} catch (err) {
				notifyError(
					"Erro ao buscar endereço",
					"Verifique se o CEP digitado é válido."
				);
			}
		};

		fetchAndFillAddress();
	}, [form.values.zipCode]);
	return (
		<>
			<PostalCodeInput
				label="CEP"
				{...form.getInputProps("zipCode")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "zipCode")
				}
				disabled={readOnly}
			/>
			<TextInput
				label="Rua"
				placeholder="Ex: Avenida Brasil"
				{...form.getInputProps("street")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "street")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Número"
				placeholder="Ex: 123"
				{...form.getInputProps("number")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "number")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Bairro"
				placeholder="Ex: Centro"
				{...form.getInputProps("neighborhood")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "neighborhood")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Cidade"
				placeholder="Ex: São Paulo"
				{...form.getInputProps("city")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "city")
				}
				disabled={readOnly}
			/>

			<TextInput
				label="Complemento"
				placeholder="Ex: Apto 101, Bloco B"
				{...form.getInputProps("complement")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "complement")
				}
				disabled={readOnly}
			/>

			<Select
				label="Estado"
				placeholder="Selecione o estado"
				data={BRAZILIAN_STATES}
				{...form.getInputProps("state")}
				withAsterisk={
					!readOnly && isFieldRequired(AddressSchema, "state")
				}
				disabled={readOnly}
			/>
		</>
	);
};
