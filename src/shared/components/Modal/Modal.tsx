import { useResponsive } from "@/shared/hooks/useResponsive";
import {
	Modal as MantineModal,
	type ModalProps as MantineModalProps,
} from "@mantine/core";
import { ReactNode } from "react";

type ModalProps = MantineModalProps & {
	children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children, ...modalProps }) => {
	const { isMobile } = useResponsive();
	return (
		<MantineModal
			fullScreen={isMobile}
			transitionProps={{ transition: "fade", duration: 200 }}
			centered
			size="80%"
			{...modalProps}
		>
			{children}
		</MantineModal>
	);
};
