import { usePersonForm } from "@/shared/hooks/usePersonForm";
import { useAddressForm } from "@/shared/hooks/useAddressForm";
import { PersonFields } from "@/shared/components/form/groups/PersonFields";
import { AddressFields } from "@/shared/components/form/groups/AddressFields";
import { Button } from "@mantine/core";
import { ContactFields } from "@/shared/components/form/groups/ContactFields";

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
			<PersonFields form={personForm} readOnly={false} />
			<ContactFields form={personForm} readOnly={false} />
			<AddressFields form={addressForm} readOnly={false} />
			<Button type="submit">Salvar aluno</Button>
		</form>
	);
};
