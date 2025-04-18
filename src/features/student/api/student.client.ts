import { api } from "@/libs/api/api.client";
import { CreateStudentInput } from "../model/student.types";

export const studentApi = {
  async create(data: CreateStudentInput) {
    return api.post("/students", data);
  },

  async list() {
    return api.get("/students");
  },

  async get(id: string) {
    return api.get(`/students/${id}`);
  },

  async update(id: string, data: Partial<CreateStudentInput>) {
    return api.put(`/students/${id}`, data);
  },

  async delete(id: string) {
    return api.delete(`/students/${id}`);
  },
};
