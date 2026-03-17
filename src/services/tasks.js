import { apiRequest } from "./api";

export const tasksAPI = {
  async getTasks() {
    const data = await apiRequest("/kanban", { method: "GET" });
    return data.tasks;
  },
  async getTaskById(id) {
    const data = await apiRequest(`/kanban/${id}`, { method: "GET" });
    return data.task;
  },
  async createTask(taskData) {
    const data = await apiRequest("/kanban", {
      method: "POST",
      body: taskData,
    });
    return data.tasks;
  },
  async updateTask(id, taskData) {
    const data = await apiRequest(`/kanban/${id}`, {
      method: "PUT",
      body: taskData,
    });
    return data.tasks;
  },
  async deleteTask(id) {
    const data = await apiRequest(`/kanban/${id}`, {
      method: "DELETE",
    });
    return data.tasks;
  },
};
