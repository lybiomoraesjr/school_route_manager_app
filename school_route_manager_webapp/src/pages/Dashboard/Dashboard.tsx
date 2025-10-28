import {
  Paper,
  Group,
  Button,
  Table,
  Avatar,
  Title,
  Text,
  Badge,
  Input,
  SegmentedControl,
  ScrollArea,
  rem,
} from "@mantine/core";
import {
  Bell,
  Plus,
  MagnifyingGlass,
  Eye,
  Play,
  Student,
} from "phosphor-react";

const routes = [
  {
    name: "Rota Centro 01",
    vehicle: "ABC-1234 (Sprinter)",
    driver: "Carlos Pereira",
    status: "Em andamento",
    partida: "07:00",
    chegada: "08:00",
    statusColor: "yellow",
    actions: ["view", "start"],
  },
  {
    name: "Rota Sul 03",
    vehicle: "DEF-5678 (Van)",
    driver: "Ana Souza",
    status: "Concluída",
    partida: "07:15",
    chegada: "08:10",
    statusColor: "green",
    actions: ["view"],
  },
  {
    name: "Rota Norte 02",
    vehicle: "GHI-9012 (Ônibus)",
    driver: "Mariana Lima",
    status: "Atrasada",
    partida: "07:30",
    chegada: "08:30",
    statusColor: "red",
    actions: ["view"],
  },
  {
    name: "Rota Leste 05",
    vehicle: "JKL-3456 (Van)",
    driver: "Pedro Costa",
    status: "Agendada",
    partida: "07:45",
    chegada: "08:45",
    statusColor: "gray",
    actions: ["view", "start"],
  },
];

const Dashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0e7ff 0%, #f0f4ff 100%)",
      }}
    >
      <Group justify="center" align="flex-start" style={{ minHeight: "100vh" }}>
        <Paper
          w="100%"
          maw={1280}
          radius={18}
          p={0}
          style={{ margin: rem(32), overflow: "hidden" }}
        >
          {/* Main */}
          <main style={{ padding: "32px 40px" }}>
            <Group justify="space-between" align="center" mb={32} wrap="wrap">
              <Title order={1} size={36} fw={900} c="#1e293b">
                Dashboard - Rotas de Hoje
              </Title>
              <Button
                leftSection={<Plus size={20} />}
                size="md"
                radius={8}
                color="blue"
                style={{ fontWeight: 600 }}
              >
                Adicionar Nova Rota
              </Button>
            </Group>
            {/* Cards */}
            <Group gap={24} mb={32} wrap="wrap">
              <Paper
                p={24}
                radius={16}
                shadow="xs"
                withBorder
                style={{ minWidth: 158, flex: 1, maxWidth: 300 }}
              >
                <Text size="md" c="dimmed" fw={500} mb={4}>
                  Rotas Totais
                </Text>
                <Text size="2xl" fw={700} c="#1e293b">
                  12
                </Text>
              </Paper>
              <Paper
                p={24}
                radius={16}
                shadow="xs"
                withBorder
                style={{ minWidth: 158, flex: 1, maxWidth: 300 }}
              >
                <Text size="md" c="dimmed" fw={500} mb={4}>
                  Em Andamento
                </Text>
                <Text size="2xl" fw={700} c="#1e293b">
                  3
                </Text>
              </Paper>
              <Paper
                p={24}
                radius={16}
                shadow="xs"
                withBorder
                style={{ minWidth: 158, flex: 1, maxWidth: 300 }}
              >
                <Text size="md" c="dimmed" fw={500} mb={4}>
                  Concluídas
                </Text>
                <Text size="2xl" fw={700} c="#1e293b">
                  5
                </Text>
              </Paper>
              <Paper
                p={24}
                radius={16}
                shadow="xs"
                withBorder
                style={{ minWidth: 158, flex: 1, maxWidth: 300 }}
              >
                <Text size="md" c="dimmed" fw={500} mb={4}>
                  Alertas
                </Text>
                <Text size="2xl" fw={700} c="red">
                  1
                </Text>
              </Paper>
            </Group>
            {/* Filtros e busca */}
            <Group justify="space-between" align="center" mb={24} wrap="wrap">
              <SegmentedControl
                data={[
                  { label: "Todos", value: "todos" },
                  { label: "Em andamento", value: "andamento" },
                  { label: "Concluído", value: "concluido" },
                  { label: "Atrasado", value: "atrasado" },
                ]}
                defaultValue="todos"
                size="md"
                radius={8}
                color="blue"
              />
              <Input
                leftSection={<MagnifyingGlass size={18} color="#94a3b8" />}
                placeholder="Buscar por Motorista/Veículo"
                size="md"
                radius={8}
                style={{ width: 260, background: "#f1f5f9" }}
              />
            </Group>
            {/* Tabela */}
            <ScrollArea>
              <Table striped highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Nome da Rota</Table.Th>
                    <Table.Th>Veículo</Table.Th>
                    <Table.Th>Motorista</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Partida</Table.Th>
                    <Table.Th>Chegada Prevista</Table.Th>
                    <Table.Th style={{ textAlign: "right" }}>Ações</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {routes.map((route, idx) => (
                    <Table.Tr key={idx}>
                      <Table.Td>
                        <Text fw={600}>{route.name}</Text>
                      </Table.Td>
                      <Table.Td>{route.vehicle}</Table.Td>
                      <Table.Td>{route.driver}</Table.Td>
                      <Table.Td>
                        <Badge
                          color={
                            route.statusColor === "yellow"
                              ? "yellow"
                              : route.statusColor === "green"
                              ? "green"
                              : route.statusColor === "red"
                              ? "red"
                              : "gray"
                          }
                          variant="light"
                          size="md"
                        >
                          {route.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td>{route.partida}</Table.Td>
                      <Table.Td>{route.chegada}</Table.Td>
                      <Table.Td style={{ textAlign: "right" }}>
                        <Group gap={4} justify="end">
                          <Button
                            variant="subtle"
                            color="blue"
                            radius={50}
                            size="compact-md"
                            title="Ver detalhes"
                          >
                            <Eye size={18} />
                          </Button>
                          {route.actions.includes("start") && (
                            <Button
                              variant="subtle"
                              color="green"
                              radius={50}
                              size="compact-md"
                              title="Iniciar rota"
                            >
                              <Play size={18} />
                            </Button>
                          )}
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </main>
        </Paper>
      </Group>
    </div>
  );
};

export default Dashboard;
