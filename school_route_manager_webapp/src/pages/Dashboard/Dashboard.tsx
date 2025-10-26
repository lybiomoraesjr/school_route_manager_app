import {
  Paper,
  Group,
  Button,
  Title,
  Text,
  Badge,
  Input,
  SegmentedControl,
  rem,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import {
  MagnifyingGlass,
  Eye,
  Play,
} from "phosphor-react";
import { dashboardRoutes, dashboardSummary } from "../../mock/dashboard.mock";

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
                  {dashboardSummary.totalRoutes}
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
                  {dashboardSummary.inProgress}
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
                  {dashboardSummary.finished}
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
                  {dashboardSummary.alerts}
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
            {/* DataTable Mantine */}
            <DataTable
              columns={[
                {
                  accessor: 'name',
                  title: 'Nome da Rota',
                  render: (row) => <Text fw={600}>{row.name}</Text>,
                },
                { accessor: 'vehicle', title: 'Veículo' },
                { accessor: 'driver', title: 'Motorista' },
                {
                  accessor: 'status',
                  title: 'Status',
                  render: (row) => (
                    <Badge
                      color={
                        row.statusColor === 'yellow'
                          ? 'yellow'
                          : row.statusColor === 'green'
                          ? 'green'
                          : row.statusColor === 'red'
                          ? 'red'
                          : 'gray'
                      }
                      variant="light"
                      size="md"
                    >
                      {row.status}
                    </Badge>
                  ),
                },
                { accessor: 'partida', title: 'Partida' },
                { accessor: 'chegada', title: 'Chegada Prevista' },
                {
                  accessor: 'actions',
                  title: 'Ações',
                  textAlign: 'right',
                  render: (row) => (
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
                      {row.actions.includes('start') && (
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
                  ),
                },
              ]}
              records={dashboardRoutes}
              striped
              highlightOnHover
              withTableBorder
              withColumnBorders
              minHeight={200}
            />
          </main>
        </Paper>
      </Group>
    </div>
  );
};

export default Dashboard;
