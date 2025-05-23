import { BaseModal } from "./BaseModal";
import { Button, Group } from "@mantine/core";
import { ReactNode } from "react";

type EntityActionModalProps = {
	title: string;
	children: ReactNode;
	opened: boolean;
	onClose: () => void;
	onEdit: () => void;
	onDelete: () => void;
	isLoading?: boolean;
};

export const EntityActionModal = ({
	title,
	children,
	opened,
	onClose,
	onEdit,
	onDelete,
	isLoading = false,
}: EntityActionModalProps) => {
	return (
		<BaseModal opened={opened} onClose={onClose} title={title}>
			{children}

			<Group justify="flex-end" mt="md">
				<Button
					variant="outline"
					color="red"
					onClick={onDelete}
					loading={isLoading}
				>
					Excluir
				</Button>
				<Button onClick={onEdit} loading={isLoading}>
					Editar
				</Button>
			</Group>
		</BaseModal>
	);
};
