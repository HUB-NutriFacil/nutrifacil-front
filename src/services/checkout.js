// src/services/checkout.js
import { api } from "./api";

// 🕒 2025-11-27 — serviço de checkout Nutrifácil
// -----------------------------------------------------------
// by: gabbu (github: gabriellesote)

export function startCheckout({ planName, amount, email, quizData }) {
  return api.post("/checkout/start", {
    planName,
    amount,
    email,     // usado como customer.email no checkout
    quizData,  // VAI PARA METADATA → usado no webhook para gerar dieta
  });
}
