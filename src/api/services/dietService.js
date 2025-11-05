// src/services/dietService.js
import http from "../api/http";
import { endpoints } from "../api/endpoints";

export const dietService = {
  async generate(userData) {
    const res = await http.post(endpoints.diet.generate, { userData });
    return res.data;
  },
  async sendViaWhatsapp(userData) {
    const res = await http.post(endpoints.diet.sendWhatsapp, { userData });
    return res.data;
  },
  async fullProcess(userData) {
    const res = await http.post(endpoints.diet.fullProcess, { userData });
    return res.data;
  },
  async getAIRecommendations(userId) {
    const res = await http.get(endpoints.diet.history(userId));
    return res.data;
  },
};
