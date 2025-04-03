import { House, Users, Bus, Gear } from "phosphor-react";
import { NavLink, Paper, Stack } from "@mantine/core";

export default function Sidebar() {
  const ICON_SIZE = 20;

  return (
    <Paper
      withBorder
      p="md"
      radius={0}
      style={{
        height: "100vh",
        width: 250,
      }}
    >
      <Stack>
        <NavLink label="Dashboard" leftSection={<House size={ICON_SIZE} />} />
        <NavLink label="Motoristas" leftSection={<Users size={ICON_SIZE} />} />
        <NavLink label="Rotas" leftSection={<Bus size={ICON_SIZE} />} />
        <NavLink
          label="Configurações"
          leftSection={<Gear size={ICON_SIZE} />}
        />
      </Stack>
    </Paper>
  );
}
