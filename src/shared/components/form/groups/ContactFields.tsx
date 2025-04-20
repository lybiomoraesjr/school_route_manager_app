import { PhoneInput } from "@/shared/components/form/inputs/PhoneInput";
import { CellPhoneInput } from "@/shared/components/form/inputs/CellPhoneInput";
import { isFieldRequired } from "@/shared/utils/zod.utils";
import { PersonSchema } from "@/shared/schemas";

export const ContactFields = ({
	form,
	readOnly = false,
}: {
	form: any;
	readOnly?: boolean;
}) => {
	return (
		<>
			<PhoneInput
				{...form.getInputProps("phone")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "phone")
				}
			/>
			<CellPhoneInput
				{...form.getInputProps("cellphone")}
				readOnly={readOnly}
				withAsterisk={
					!readOnly && isFieldRequired(PersonSchema, "cellphone")
				}
			/>
		</>
	);
};
