import { PostalCodeMasks } from "@/shared/constants/mask.constants";
import { InputBase, InputBaseProps } from "@mantine/core";
import { IMaskInput } from "react-imask";

type PostalCodeInputProps = InputBaseProps & {
	country?: string;
	readOnly?: boolean;
	placeholder?: string;
	label?: string;
};

export const PostalCodeInput: React.FC<PostalCodeInputProps> = ({
	country = "BR",
	readOnly,
	placeholder,
	label = "Postal Code",
	...rest
}) => {
	const mask = PostalCodeMasks[country];

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
