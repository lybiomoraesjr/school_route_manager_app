import { InputBase, InputBaseProps } from "@mantine/core";
import { IMaskInput } from "react-imask";

type PostalCodeInputProps = InputBaseProps & {
	country: "BR";
	readOnly?: boolean;
	placeholder?: string;
	label?: string;
};

const postalCodeMasks: Record<PostalCodeInputProps["country"], string> = {
	BR: "00000-000",
};

export const PostalCodeInput: React.FC<PostalCodeInputProps> = ({
	country,
	readOnly,
	placeholder,
	label = "CEP",
	...rest
}) => {
	const mask = postalCodeMasks[country];

	return (
		<InputBase
			label={label}
			component={IMaskInput}
			mask={mask}
			disabled={readOnly}
			placeholder={placeholder || mask}
			{...rest}
		/>
	);
};
