import type { Student } from "../types/student.types";

export const initialStudents: Student[] = [
  {
    name: 'Ana Silva',
    email: 'ana.silva@example.com',
    cpf: '11111111111',
    matricula: 'MTR1001',
    turno: 'Matutino',
    escola: 'Escola Municipal A',
    endereco: 'Rua A, 100',
    telefone: '11999990001',
    status: 'Ativo',
  },
  {
    name: 'Bruno Souza',
    email: 'bruno.souza@example.com',
    cpf: '22222222222',
    matricula: 'MTR1002',
    turno: 'Vespertino',
    escola: 'Escola Estadual B',
    endereco: 'Rua B, 200',
    telefone: '11999990002',
    status: 'Ativo',
  },
  {
    name: 'Carla Pereira',
    email: 'carla.pereira@example.com',
    cpf: '33333333333',
    matricula: 'MTR1003',
    turno: 'Noturno',
    escola: 'Colégio C',
    endereco: 'Rua C, 300',
    telefone: '11999990003',
    status: 'Inativo',
  },
];

export const schools = [
  'Escola Municipal A',
  'Escola Estadual B',
  'Colégio C',
];
