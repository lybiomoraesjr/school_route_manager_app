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

const ICON_SIZE = 20;

const links = [
  { label: "Dashboard", icon: <House size={ICON_SIZE} /> },
  { label: "Motoristas", icon: <Users size={ICON_SIZE} /> },
  { label: "Rotas", icon: <MapTrifold size={ICON_SIZE} /> },
  { label: "Alunos", icon: <Student size={ICON_SIZE} /> },
  { label: "Escolas", icon: <Buildings size={ICON_SIZE} /> },
  { label: "Paradas", icon: <MapPin size={ICON_SIZE} /> },
  { label: "Rotas Extras", icon: <MapTrifold size={ICON_SIZE} /> },
  { label: "Monitores", icon: <UserCircle size={ICON_SIZE} /> },
  { label: "Veículos", icon: <Bus size={ICON_SIZE} /> },
  { label: "Configurações", icon: <Gear size={ICON_SIZE} /> },
];

export const Sidebar = () => {
  return (
    <Stack>
      {links.map((link) => (
        <NavLink key={link.label} label={link.label} leftSection={link.icon} />
      ))}
    </Stack>
  );
};
