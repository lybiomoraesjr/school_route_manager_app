import { usePersonForm } from "@/shared/hooks/usePersonForm";
import { useAddressForm } from "@/shared/hooks/useAddressForm";
import { PersonFields } from "@/shared/components/form/groups/PersonFields";
import { AddressFields } from "@/shared/components/form/groups/AddressFields";
import { Button, Flex } from "@mantine/core";
import { ContactFields } from "@/shared/components/form/groups/ContactFields";
import { useContactForm } from "@/shared/hooks/useContactForm";

type StudentFormProps = {
	onSubmit?: (data: any) => Promise<void>;
	readOnly?: boolean;
};

export const StudentForm = ({ onSubmit, readOnly }: StudentFormProps) => {
	const personForm = usePersonForm();
	const addressForm = useAddressForm();
	const contactForm = useContactForm();

	const handleSubmit = async () => {
		console.log("handleSubmit");
		const personValid = personForm.validate();
		const addressValid = addressForm.validate();

		if (!personValid.hasErrors && !addressValid.hasErrors) {
			const fullData = {
				...personForm.values,
				address: addressForm.values,
			};

			await onSubmit?.(fullData);

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
			<ContactFields form={contactForm} readOnly={readOnly} />
			<AddressFields form={addressForm} readOnly={readOnly} />

			<Flex justify="flex-end" mt="md">
				{!readOnly && <Button type="submit">Salvar aluno</Button>}
			</Flex>
		</form>
	);
};
