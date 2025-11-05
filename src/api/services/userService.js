// src/services/userService.js
import http from "../api/http";
import { endpoints } from "../api/endpoints";

export const userService = {
  async create(data) {
    const res = await http.post(endpoints.user.create, data);
    return res.data;
  },
  async get(id) {
    const res = await http.get(endpoints.user.get(id));
    return res.data;
  },
  async update(id, data) {
    const res = await http.put(endpoints.user.update(id), data);
    return res.data;
  },
};
