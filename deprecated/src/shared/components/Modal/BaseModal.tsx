import { useResponsive } from "@/shared/hooks/useResponsive";
import { Modal, type ModalProps } from "@mantine/core";
import { ReactNode } from "react";

type BaseModalProps = ModalProps & {
	children: ReactNode;
};

export const BaseModal: React.FC<BaseModalProps> = ({
	children,
	...modalProps
}) => {
	const { isMobile } = useResponsive();
	return (
		<Modal
			fullScreen={isMobile}
			transitionProps={{ transition: "fade", duration: 200 }}
			centered
			size="80%"
			{...modalProps}
		>
			{children}
		</Modal>
	);
};
