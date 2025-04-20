import { usePersonForm } from "@/shared/hooks/usePersonForm";
import { useAddressForm } from "@/shared/hooks/useAddressForm";
import { PersonFields } from "@/shared/components/form/PersonFields";
import { AddressFields } from "@/shared/components/form/AddressFields";
import { Button } from "@mantine/core";

export const StudentForm = () => {
	const personForm = usePersonForm();
	const addressForm = useAddressForm();

	const handleSubmit = () => {
		const personValid = personForm.validate();
		const addressValid = addressForm.validate();

		if (!personValid.hasErrors && !addressValid.hasErrors) {
			const fullData = {
				...personForm.values,
				address: addressForm.values,
			};

			console.log("Formulário válido:", fullData);
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<PersonFields form={personForm} />
			<AddressFields form={addressForm} />
			<Button type="submit">Salvar aluno</Button>
		</form>
	);
};
