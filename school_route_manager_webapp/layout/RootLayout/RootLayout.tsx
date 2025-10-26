import {
  AppShell,
  AppShellMain,
  AppShellNavbar,
  AppShellHeader,
  Group,
  Button,
  Avatar,
  Title,
  Text,
  NavLink,
  Menu,
} from "@mantine/core";
import { Bell, Student, Gauge, MapPin, CaretDown, SignOut } from "phosphor-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../src/constants/routes.constants";
import type { ReactNode } from "react";
import { useAuth } from "../../src/contexts/AuthContext";

function Navbar() {
  const location = useLocation();
  return (
    <AppShellNavbar p="md">
      <NavLink
        label="Dashboard"
        component={Link}
        to={AppRoutes.HOME}
        leftSection={<Gauge size={20} />}
        active={location.pathname === AppRoutes.HOME}
        style={{ marginBottom: 8 }}
      />

      <NavLink
        label="Gerenciamento de Alunos"
        component={Link}
        to={AppRoutes.STUDENTS}
        leftSection={<Student size={20} />}
        active={location.pathname === AppRoutes.STUDENTS}
        style={{ marginBottom: 8 }}
      />

      <NavLink
        label="Gerenciamento de Paradas"
        component={Link}
        to={AppRoutes.STOPS}
        leftSection={<MapPin size={20} />}
        active={location.pathname === AppRoutes.STOPS}
      />

      <NavLink
        label="Gerenciamento de Rotas"
        component={Link}
        to={AppRoutes.ROUTES}
        leftSection={<MapPin size={20} />}
        active={location.pathname === AppRoutes.ROUTES}
        style={{ marginTop: 8 }}
      />
    </AppShellNavbar>
  );
}

function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const userName = user?.name ?? "Usuário";
  const userEmail = user?.email ?? "";
  const initials = userName
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    signOut();
    navigate(AppRoutes.LOGIN, { replace: true });
  };

  return (
    <AppShellHeader
      p={0}
      style={{
        borderBottom: "1px solid #dbe0e6",
        background: "#fff",
        height: 72,
      }}
    >
      <Group
        justify="space-between"
        align="center"
        px={40}
        py={16}
        style={{ height: "100%" }}
      >
        <Group gap={12}>
          <Student size={32} color="#2563eb" weight="duotone" />
          <Title order={2} size="h4" fw={700} c="#1e293b">
            RouteWise
          </Title>
        </Group>
        <Group gap={16}>
          <Button
            variant="subtle"
            color="blue"
            radius={8}
            size="md"
            px={12}
            style={{ height: 40 }}
          >
            <Bell size={22} />
          </Button>
          <Menu position="bottom-end" shadow="md" width={220}>
            <Menu.Target>
              <Button
                variant="subtle"
                color="dark"
                radius={8}
                size="md"
                px={12}
                style={{ height: 40 }}
                rightSection={<CaretDown size={16} />}
              >
                <Group gap={8}>
                  <Avatar radius={40} size={32} color="blue" variant="light">
                    {initials || "U"}
                  </Avatar>
                  <Text size="sm" fw={500} c="#1e293b">
                    {userName}
                  </Text>
                </Group>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {userEmail && <Menu.Label>{userEmail}</Menu.Label>}
              <Menu.Item leftSection={<SignOut size={16} />} color="red" onClick={handleLogout}>
                Sair
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </AppShellHeader>
  );
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AppShell
      navbar={{ width: 220, breakpoint: "sm", collapsed: { mobile: true } }}
      header={{ height: 72 }}
      padding="md"
    >
      <Header />
      <Navbar />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
