// src/services/paymentService.js
import http from "../api/http";
import { endpoints } from "../api/endpoints";

export const paymentService = {
  async createPreference(data) {
    const res = await http.post(endpoints.payments.createPreference, data);
    return res.data;
  },
};
