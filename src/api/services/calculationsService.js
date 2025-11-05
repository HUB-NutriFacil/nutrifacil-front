// src/services/calculationsService.js
import http from "../api/http";
import { endpoints } from "../api/endpoints";

export const calculationsService = {
  async calculateTMB(data) {
    const res = await http.post(endpoints.calculations.tmb, data);
    return res.data;
  },
  async calculateIMC(data) {
    const res = await http.post(endpoints.calculations.imc, data);
    return res.data;
  },
  async calculateWater(data) {
    const res = await http.post(endpoints.calculations.water, data);
    return res.data;
  },
};
