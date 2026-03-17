import { apiRequest } from "./api";

export const authAPI = {
  async login(login, password) {
    return apiRequest("/user/login", {
      method: "POST",
      body: { login, password },
    });
  },
  async register(login, name, password) {
    return apiRequest("/user", {
      method: "POST",
      body: { login, name, password },
    });
  },
  async getCurrentUser() {
    return apiRequest("/user", {
      method: "GET",
    });
  },
};
