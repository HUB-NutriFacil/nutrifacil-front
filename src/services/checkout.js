// src/services/checkout.js
import { api } from "./api";

export function startCheckout({ planName, amount }) {
  return api.post("/checkout/start", {
    planName,
    amount
  });
}

// 🕒 2025-11-27 — serviço de checkout Nutrifácil
// -----------------------------------------------------------
// by: gabbu (github: gabriellesote)