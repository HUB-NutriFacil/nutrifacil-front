// src/api/endpoints.js
export const endpoints = {
  calculations: {
    tmb: "/calculations/tmb",
    imc: "/calculations/imc",
    water: "/calculations/water",
  },
  diet: {
    generate: "/diet-plans/generate",
    sendWhatsapp: "/diet-plans/send-whatsapp",
    fullProcess: "/diet-plans/full-process",
    aiRecommendations: "/diets/ai-recommendations",
    history: (userId) => `/diets/user/${userId}/recommendations`,
  },
  food: {
    all: "/foods",
    byCategory: (category) => `/foods/${category}`,
  },
  payments: {
    createPreference: "/payments/create_preference",
    webhook: "/payments/webhook",
  },
  user: {
    create: "/users",
    get: (id) => `/users/${id}`,
    update: (id) => `/users/${id}`,
  },
};
