import { DateInput, DateInputProps } from "@mantine/dates";
import { IMaskInput } from "react-imask";

type MaskedDateInputProps = DateInputProps & {
	form: any;
	field: string;
	readOnly?: boolean;
};

export const MaskedDateInput: React.FC<MaskedDateInputProps> = ({
	form,
	field,
	readOnly = false,
	label = "Data",
	placeholder = "DD/MM/AAAA",
	...rest
}) => {
	return (
		<DateInput
			label={label}
			placeholder={placeholder}
			{...form.getInputProps(field)}
			disabled={readOnly}
			valueFormat="DD/MM/YYYY"
			component={IMaskInput}
			mask="00/00/0000"
			{...rest}
		/>
	);
};
