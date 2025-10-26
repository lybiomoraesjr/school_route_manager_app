import { InputBase, InputBaseProps } from "@mantine/core";
import { IMaskInput } from "react-imask";
import React from "react";

type CpfInputProps = InputBaseProps & {
	readOnly?: boolean;
};

export const CpfInput: React.FC<CpfInputProps> = ({ readOnly, ...rest }) => {
	return (
		<InputBase
			label="CPF"
			disabled={readOnly}
			component={IMaskInput}
			mask="000.000.000-00"
			placeholder="000.000.000-00"
			{...rest}
		/>
	);
};
