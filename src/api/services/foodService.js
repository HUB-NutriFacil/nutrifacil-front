// src/services/foodService.js
import http from "../api/http";
import { endpoints } from "../api/endpoints";

export const foodService = {
  async getAll() {
    const res = await http.get(endpoints.food.all);
    return res.data;
  },
  async getByCategory(category) {
    const res = await http.get(endpoints.food.byCategory(category));
    return res.data;
  },
};
