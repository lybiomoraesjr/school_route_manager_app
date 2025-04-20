import { InputBase, InputBaseProps } from "@mantine/core";
import { IMaskInput } from "react-imask";

type CellPhoneInputProps = InputBaseProps & {
	readOnly?: boolean;
};

export const CellPhoneInput: React.FC<CellPhoneInputProps> = ({
	readOnly,
	...rest
}) => {
	return (
		<InputBase
			label="Celular"
			withAsterisk={!readOnly}
			disabled={readOnly}
			component={IMaskInput}
			mask="(00) 00000-0000"
			placeholder="(00) 00000-0000"
			{...rest}
		/>
	);
};
