import { Stack, NavLink } from "@mantine/core";
import {
	House,
	Users,
	Bus,
	Gear,
	MapTrifold,
	Student,
	Buildings,
	MapPin,
	UserCircle,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";

const ICON_SIZE = 20;

const links = [
	{ label: "Dashboard", icon: <House size={ICON_SIZE} />, route: "/home" },
	{
		label: "Motoristas",
		icon: <Users size={ICON_SIZE} />,
		route: "/motoristas",
	},
	{ label: "Rotas", icon: <MapTrifold size={ICON_SIZE} />, route: "/rotas" },
	{ label: "Alunos", icon: <Student size={ICON_SIZE} />, route: "/alunos" },
	{
		label: "Escolas",
		icon: <Buildings size={ICON_SIZE} />,
		route: "/escolas",
	},
	{ label: "Paradas", icon: <MapPin size={ICON_SIZE} />, route: "/paradas" },
	{
		label: "Rotas Extras",
		icon: <MapTrifold size={ICON_SIZE} />,
		route: "/rotas-extras",
	},
	{
		label: "Monitores",
		icon: <UserCircle size={ICON_SIZE} />,
		route: "/monitores",
	},
	{ label: "Veículos", icon: <Bus size={ICON_SIZE} />, route: "/veiculos" },
	{
		label: "Configurações",
		icon: <Gear size={ICON_SIZE} />,
		route: "/configuracoes",
	},
];

export const Sidebar = () => {
	const navigate = useNavigate();

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
