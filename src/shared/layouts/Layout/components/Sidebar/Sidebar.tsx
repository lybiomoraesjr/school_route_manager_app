import { UserRole } from "@/features/auth/model/user.types";
import { SidebarLinksByRole } from "@/shared/constants/sidebar-links";
import { Stack, NavLink } from "@mantine/core";

import { useNavigate } from "react-router-dom";

type SidebarProps = {
	role: UserRole;
};

export const Sidebar: React.FC<SidebarProps> = ({ role = UserRole.ADMIN }) => {
	const navigate = useNavigate();
	const links = SidebarLinksByRole[role] || [];

	return (
		<Stack>
			{links.map((link) => (
				<NavLink
					key={link.label}
					label={link.label}
					leftSection={link.icon}
					onClick={() => navigate(link.route)}
				/>
			))}
		</Stack>
	);
};
