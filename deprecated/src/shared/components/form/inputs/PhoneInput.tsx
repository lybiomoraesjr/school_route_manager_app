import { InputBase, InputBaseProps } from "@mantine/core";
import { IMaskInput } from "react-imask";

type PhoneInputProps = InputBaseProps & {
	readOnly?: boolean;
};

export const PhoneInput: React.FC<PhoneInputProps> = ({
	readOnly,
	...rest
}) => {
	return (
		<InputBase
			label="Telefone"
			disabled={readOnly}
			component={IMaskInput}
			mask="(00) 0000-0000"
			placeholder="(00) 0000-0000"
			{...rest}
		/>
	);
};
