import { usePersonForm } from "@/shared/hooks/usePersonForm";
import { useAddressForm } from "@/shared/hooks/useAddressForm";
import { PersonFields } from "@/shared/components/form/groups/PersonFields";
import { AddressFields } from "@/shared/components/form/groups/AddressFields";
import { Button } from "@mantine/core";
import { ContactFields } from "@/shared/components/form/groups/ContactFields";

type StudentFormProps = {
	onSubmit?: () => void;
	readOnly?: boolean;
};

export const StudentForm = ({ onSubmit, readOnly }: StudentFormProps) => {
	const personForm = usePersonForm();
	const addressForm = useAddressForm();

	const handleSubmit = () => {
		console.log("handleSubmit");
		const personValid = personForm.validate();
		const addressValid = addressForm.validate();

		if (!personValid.hasErrors && !addressValid.hasErrors) {
			const fullData = {
				...personForm.values,
				address: addressForm.values,
			};

			onSubmit?.();

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
			<PersonFields form={personForm} readOnly={readOnly} />
			<ContactFields form={personForm} readOnly={readOnly} />
			<AddressFields form={addressForm} readOnly={readOnly} />

			{!readOnly && <Button type="submit">Salvar aluno</Button>}
		</form>
	);
};
