import { usePersonForm } from "@/shared/hooks/usePersonForm";
import { useAddressForm } from "@/shared/hooks/useAddressForm";
import { PersonFields } from "@/shared/components/form/groups/PersonFields";
import { AddressFields } from "@/shared/components/form/groups/AddressFields";
import { Button, Flex, Select } from "@mantine/core";
import { ContactFields } from "@/shared/components/form/groups/ContactFields";
import { useContactForm } from "@/shared/hooks/useContactForm";
import {
	ContactWithRequiredCellPhoneSchema,
	ContactConfigs,
} from "@/shared/schemas/fields/contact.schema";
import { Status } from "@/shared/types";

type StudentFormProps = {
	onSubmit?: (data: any) => Promise<void>;
	readOnly?: boolean;
};

export const StudentForm = ({ onSubmit, readOnly }: StudentFormProps) => {
	const personForm = usePersonForm();
	const addressForm = useAddressForm();
	const contactForm = useContactForm(ContactWithRequiredCellPhoneSchema);

	const handleSubmit = async () => {
		console.log("handleSubmit");
		const personValid = personForm.validate();
		const addressValid = addressForm.validate();
		const contactValid = contactForm.validate();

		if (
			!personValid.hasErrors &&
			!addressValid.hasErrors &&
			!contactValid.hasErrors
		) {
			const fullData = {
				...personForm.values,
				address: addressForm.values,
				contact: contactForm.values,
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
			<ContactFields
				form={contactForm}
				config={ContactConfigs.withRequiredCellPhone}
				readOnly={readOnly}
			/>
			<AddressFields form={addressForm} readOnly={readOnly} />
			<Select
				label="Status"
				data={[
					{ value: `${Status.ACTIVE}`, label: "Ativo" },
					{ value: `${Status.INACTIVE}`, label: "Inativo" },
				]}
				{...personForm.getInputProps("status")}
				withAsterisk={!readOnly}
				disabled={readOnly}
			/>

			<Flex justify="flex-end" mt="md">
				{!readOnly && <Button type="submit">Salvar aluno</Button>}
			</Flex>
		</form>
	);
};
