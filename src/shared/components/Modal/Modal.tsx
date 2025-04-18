import {
	Modal as MantineModal,
	type ModalProps as MantineModalProps,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ReactNode } from "react";

type ModalProps = MantineModalProps & {
	children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children, ...modalProps }) => {
	const isMobile = useMediaQuery("(max-width: 50em)");

	return (
		<MantineModal
			fullScreen={isMobile}
			transitionProps={{ transition: "fade", duration: 200 }}
			centered
			{...modalProps}
		>
			{children}
		</MantineModal>
	);
};
