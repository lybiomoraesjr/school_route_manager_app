

import { AppShell, AppShellMain, AppShellNavbar, AppShellHeader, Group, Button, Avatar, Title, Text, rem, NavLink } from '@mantine/core';
import { Bell, Student, Gauge } from 'phosphor-react';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();
  return (
    <AppShellNavbar p="md">
      <NavLink
        label="Dashboard"
        component={Link}
        to="/dashboard"
        leftSection={<Gauge size={20} />}
        active={location.pathname === '/dashboard'}
        style={{ marginBottom: 8 }}
      />
      {/* Adicione mais links aqui se necessário */}
    </AppShellNavbar>
  );
}

function Header() {
  return (
    <AppShellHeader p={0} style={{ borderBottom: '1px solid #dbe0e6', background: '#fff', height: 72 }}>
      <Group justify="space-between" align="center" px={40} py={16} style={{ height: '100%' }}>
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
          <Group gap={8}>
            <Avatar
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApT8K3yB_RrBA-SkT0g_mdduCs9t6m5RCpkLWeAKHU4x8bubOW22Qv4cwHBy9lYH95-a1ioQLNH42184gpdl6tuOgIAzHFa-iYSua0QXM437ANL7x_G9t3FYyqYBBOW9go8RdqZN3cIE7gq4yMKtD9tDDGEdRtWqPum3-8j_CjsRs83SuibNkIRRcBU7N-TaotHtTWEk7_NV_PiRcC8JJ7cKXG6VA_GHSi3lTFOWS4CwIrAbJeY3Hvqju2UndJtmBfoOoTe_U4RKs"
              radius={40}
              size={40}
            />
            <Text size="sm" fw={500} c="#1e293b">
              João Silva
            </Text>
          </Group>
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
      navbar={{ width: 220, breakpoint: 'sm', collapsed: { mobile: true } }}
      header={{ height: 72 }}
      padding="md"
    >
      <Header />
      <Navbar />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
