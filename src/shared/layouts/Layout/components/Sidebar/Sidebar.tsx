import { Stack, NavLink } from "@mantine/core";
import {
	House,
	Users,
	Bus,
	MapTrifold,
	Student,
	Buildings,
	MapPin,
	UserCircle,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";

const ICON_SIZE = 20;

enum roles {
	ADMIN = "admin",
	SCHOOL = "school",
	MONITOR = "monitor",
}

const RolesLinks = {
	[roles.ADMIN]: [
		{
			label: "Dashboard",
			icon: <House size={ICON_SIZE} />,
			route: "/home",
		},
		{
			label: "Motoristas",
			icon: <Users size={ICON_SIZE} />,
			route: "/motoristas",
		},
		{
			label: "Rotas",
			icon: <MapTrifold size={ICON_SIZE} />,
			route: "/rotas",
		},
		{
			label: "Alunos",
			icon: <Student size={ICON_SIZE} />,
			route: "/alunos",
		},
		{
			label: "Escolas",
			icon: <Buildings size={ICON_SIZE} />,
			route: "/escolas",
		},
		{
			label: "Paradas",
			icon: <MapPin size={ICON_SIZE} />,
			route: "/paradas",
		},
		{
			label: "Monitores",
			icon: <UserCircle size={ICON_SIZE} />,
			route: "/monitores",
		},
		{
			label: "Veículos",
			icon: <Bus size={ICON_SIZE} />,
			route: "/veiculos",
		},
		{
			label: "Responsáveis",
			icon: <UserCircle size={ICON_SIZE} />,
			route: "/responsaveis",
		},
	],
	[roles.SCHOOL]: [
		{
			label: "Escolas",
			icon: <Buildings size={ICON_SIZE} />,
			route: "/escolas",
		},
	],

	[roles.MONITOR]: [
		{
			label: "Monitores",
			icon: <UserCircle size={ICON_SIZE} />,
			route: "/monitores",
		},
		{
			label: "Veículos",
			icon: <Bus size={ICON_SIZE} />,
			route: "/veiculos",
		},
	],
};

interface SidebarProps {
	role?: roles;
}

export const Sidebar = ({ role = roles.ADMIN }: SidebarProps) => {
	const navigate = useNavigate();
	const links = RolesLinks[role] || [];

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
