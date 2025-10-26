import {
	House,
	Users,
	MapTrifold,
	Student,
	Buildings,
	MapPin,
	UserCircle,
	Bus,
} from "phosphor-react";
import { UserRole } from "@/features/auth/model/user.types";
import { ReactNode } from "react";
import { AppRoutes } from "@/shared/constants/routes.constants";

const ICON_SIZE = 20;

type SidebarLink = {
	label: string;
	icon: ReactNode;
	route: string;
};

export const SidebarLinksByRole: Record<UserRole, SidebarLink[]> = {
	[UserRole.ADMIN]: [
		{
			label: "Dashboard",
			icon: <House size={ICON_SIZE} />,
			route: AppRoutes.HOME,
		},
		{
			label: "Motoristas",
			icon: <Users size={ICON_SIZE} />,
			route: AppRoutes.DRIVERS,
		},
		{
			label: "Rotas",
			icon: <MapTrifold size={ICON_SIZE} />,
			route: AppRoutes.ROUTES,
		},
		{
			label: "Alunos",
			icon: <Student size={ICON_SIZE} />,
			route: AppRoutes.STUDENTS,
		},
		{
			label: "Escolas",
			icon: <Buildings size={ICON_SIZE} />,
			route: AppRoutes.SCHOOLS,
		},
		{
			label: "Paradas",
			icon: <MapPin size={ICON_SIZE} />,
			route: AppRoutes.STOPS,
		},
		{
			label: "Monitores",
			icon: <UserCircle size={ICON_SIZE} />,
			route: AppRoutes.MONITORS,
		},
		{
			label: "Veículos",
			icon: <Bus size={ICON_SIZE} />,
			route: AppRoutes.VEHICLES,
		},
		{
			label: "Responsáveis",
			icon: <UserCircle size={ICON_SIZE} />,
			route: AppRoutes.GUARDIANS,
		},
	],
	[UserRole.SCHOOL]: [
		{
			label: "Escolas",
			icon: <Buildings size={ICON_SIZE} />,
			route: AppRoutes.SCHOOLS,
		},
	],
	[UserRole.MONITOR]: [
		{
			label: "Monitores",
			icon: <UserCircle size={ICON_SIZE} />,
			route: AppRoutes.MONITORS,
		},
		{
			label: "Veículos",
			icon: <Bus size={ICON_SIZE} />,
			route: AppRoutes.VEHICLES,
		},
	],
	[UserRole.STUDENT]: [],
	[UserRole.GUARDIAN]: [],
	[UserRole.DRIVER]: [],
};
