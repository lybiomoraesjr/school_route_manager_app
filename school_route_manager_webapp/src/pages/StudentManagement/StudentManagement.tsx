
import { useState } from 'react';
import {
  Paper,
  Group,
  Button,
  Title,
  Text,
  Input,
  Badge,
  Modal,
  TextInput,
  Select,
  Checkbox,
  Grid,
} from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { Pencil, Trash, Warning, Plus, MagnifyingGlass } from 'phosphor-react';
import { initialStudents, schools } from '../../mock/student.mock';

const StudentManagement = () => {
  const [students, setStudents] = useState<any[]>(initialStudents);
  const [search, setSearch] = useState<string>('');
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [addForm, setAddForm] = useState<any>({
    name: '',
    email: '',
    cpf: '',
    matricula: '',
    turno: '',
    escola: '',
    endereco: '',
    telefone: '',
    status: true,
  });
  const [editForm, setEditForm] = useState<any>({
    name: '',
    email: '',
    cpf: '',
    matricula: '',
    turno: '',
    escola: '',
    endereco: '',
    telefone: '',
    status: true,
  });

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.matricula.includes(search) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.cpf.includes(search)
  );


  const handleEdit = (student: any) => {
    setEditForm({
      name: student.name,
      email: student.email,
      cpf: student.cpf,
      matricula: student.matricula,
      turno: student.turno,
      escola: student.escola,
      endereco: student.endereco,
      telefone: student.telefone,
      status: student.status === 'Ativo',
    });
    setSelectedStudent(student);
    setEditModalOpen(true);
  };

  const handleDelete = (student: any) => {
    setSelectedStudent(student);
    setDeleteModalOpen(true);
  };

  const handleAdd = () => {
    setStudents((prev) => [
      ...prev,
      { ...addForm, status: addForm.status ? 'Ativo' : 'Inativo' },
    ]);
    setAddModalOpen(false);
    setAddForm({
      name: '',
      email: '',
      cpf: '',
      matricula: '',
      turno: '',
      escola: '',
      endereco: '',
      telefone: '',
      status: true,
    });
  };

  const handleEditSave = () => {
    setStudents((prev) =>
      prev.map((s) =>
        s.matricula === selectedStudent.matricula
          ? { ...editForm, status: editForm.status ? 'Ativo' : 'Inativo' }
          : s
      )
    );
    setEditModalOpen(false);
    setSelectedStudent(null);
    setEditForm({
      name: '',
      email: '',
      cpf: '',
      matricula: '',
      turno: '',
      escola: '',
      endereco: '',
      telefone: '',
      status: true,
    });
  };

  const handleDeleteConfirm = () => {
    setStudents((prev: any[]) =>
      prev.filter((s: any) => s.matricula !== selectedStudent.matricula)
    );
    setDeleteModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <Paper shadow="md" radius={18} p={32} maw={1200} mx="auto" mt={32}>
      <Group justify="space-between" align="center" mb={24}>
        <Title order={1} size={32} fw={900}>
          Gerenciamento de Alunos
        </Title>
  <Button leftSection={<Plus size={18} />} onClick={() => { setAddModalOpen(true); setAddForm({ name: '', email: '', cpf: '', matricula: '', turno: '', escola: '', endereco: '', telefone: '', status: true }); }}>
          Adicionar Aluno
        </Button>
      </Group>
      <Group mb={16}>
        <Input
          leftSection={<MagnifyingGlass size={18} />}
          placeholder="Buscar por nome ou matrícula"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          size="md"
          radius={8}
          style={{ maxWidth: 340 }}
        />
      </Group>
      <DataTable
        columns={[
          { accessor: 'name', title: 'Nome' },
          { accessor: 'email', title: 'E-mail' },
          { accessor: 'cpf', title: 'CPF' },
          { accessor: 'matricula', title: 'Matrícula' },
          { accessor: 'turno', title: 'Turno' },
          { accessor: 'escola', title: 'Escola' },
          { accessor: 'endereco', title: 'Endereço' },
          { accessor: 'telefone', title: 'Telefone' },
          {
            accessor: 'status',
            title: 'Status',
            render: (row) => (
              <Badge color={row.status === 'Ativo' ? 'green' : 'gray'} variant="light">
                {row.status}
              </Badge>
            ),
          },
          {
            accessor: 'actions',
            title: 'Ações',
            textAlign: 'right',
            render: (row) => (
              <Group gap={4} justify="end">
                <Button variant="subtle" color="blue" size="compact-md" radius={50} onClick={() => handleEdit(row)}>
                  <Pencil size={16} />
                </Button>
                <Button variant="subtle" color="red" size="compact-md" radius={50} onClick={() => handleDelete(row)}>
                  <Trash size={16} />
                </Button>
              </Group>
            ),
          },
        ]}
        records={filteredStudents}
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        minHeight={200}
        noRecordsText="Nenhum aluno encontrado"
      />

      {/* Modal de Adicionar */}
      <Modal
        opened={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        title="Adicionar Novo Aluno"
        centered
      >
        <form onSubmit={e => { e.preventDefault(); handleAdd(); }}>
          <Grid gutter={12}>
            <Grid.Col span={6}>
              <TextInput label="Nome completo" value={addForm.name} onChange={e => setAddForm((f: any) => ({ ...f, name: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="E-mail" value={addForm.email} onChange={e => setAddForm((f: any) => ({ ...f, email: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="CPF" value={addForm.cpf} onChange={e => setAddForm((f: any) => ({ ...f, cpf: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Matrícula" value={addForm.matricula} onChange={e => setAddForm((f: any) => ({ ...f, matricula: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select label="Turno" data={["Matutino", "Vespertino", "Noturno"]} value={addForm.turno} onChange={v => setAddForm((f: any) => ({ ...f, turno: v || '' }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select label="Escola" data={schools} value={addForm.escola} onChange={v => setAddForm((f: any) => ({ ...f, escola: v || '' }))} required />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Endereço" value={addForm.endereco} onChange={e => setAddForm((f: any) => ({ ...f, endereco: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Telefone" value={addForm.telefone} onChange={e => setAddForm((f: any) => ({ ...f, telefone: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <Checkbox label="Status Ativo" checked={addForm.status} onChange={e => setAddForm((f: any) => ({ ...f, status: e.currentTarget.checked }))} />
            </Grid.Col>
          </Grid>
          <Group justify="end" mt={24}>
            <Button variant="default" onClick={() => setAddModalOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" color="blue">
              Salvar
            </Button>
          </Group>
        </form>
      </Modal>

      {/* Modal de Editar */}
      <Modal
        opened={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="Editar Aluno"
        centered
      >
        <form onSubmit={e => { e.preventDefault(); handleEditSave(); }}>
          <Grid gutter={12}>
            <Grid.Col span={6}>
              <TextInput label="Nome completo" value={editForm.name} onChange={e => setEditForm((f: any) => ({ ...f, name: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="E-mail" value={editForm.email} onChange={e => setEditForm((f: any) => ({ ...f, email: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="CPF" value={editForm.cpf} onChange={e => setEditForm((f: any) => ({ ...f, cpf: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Matrícula" value={editForm.matricula} onChange={e => setEditForm((f: any) => ({ ...f, matricula: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select label="Turno" data={["Matutino", "Vespertino", "Noturno"]} value={editForm.turno} onChange={v => setEditForm((f: any) => ({ ...f, turno: v || '' }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select label="Escola" data={schools} value={editForm.escola} onChange={v => setEditForm((f: any) => ({ ...f, escola: v || '' }))} required />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Endereço" value={editForm.endereco} onChange={e => setEditForm((f: any) => ({ ...f, endereco: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Telefone" value={editForm.telefone} onChange={e => setEditForm((f: any) => ({ ...f, telefone: e.currentTarget.value }))} required />
            </Grid.Col>
            <Grid.Col span={6}>
              <Checkbox label="Status Ativo" checked={editForm.status} onChange={e => setEditForm((f: any) => ({ ...f, status: e.currentTarget.checked }))} />
            </Grid.Col>
          </Grid>
          <Group justify="end" mt={24}>
            <Button color="red" variant="light" onClick={() => { setEditModalOpen(false); setDeleteModalOpen(true); }}>
              Excluir
            </Button>
            <Button variant="default" onClick={() => setEditModalOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" color="blue">
              Salvar
            </Button>
          </Group>
        </form>
      </Modal>

      {/* Modal de Confirmação de Exclusão */}
      <Modal
        opened={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Excluir Aluno"
        centered
      >
  <Group align="center" gap={8}>
          <Warning size={48} color="#e8590c" />
          <Text size="lg" fw={500} ta="center">
            Tem certeza que deseja excluir este aluno?
          </Text>
          <Group justify="center" mt={16}>
            <Button color="red" onClick={handleDeleteConfirm}>
              Sim, tenho certeza
            </Button>
            <Button variant="default" onClick={() => setDeleteModalOpen(false)}>
              Não, cancelar
            </Button>
          </Group>
        </Group>
      </Modal>
    </Paper>
  );
};

export default StudentManagement;