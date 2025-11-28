// src/services/api.js
// 🕒 2025-11-27 — base de conexão global com backend
// -----------------------------------------------------------
// by: gabbu (github: gabriellesote)

const API_URL =
  import.meta.env.VITE_API_URL ||
  process.env.REACT_APP_API_URL ||
  "http://localhost:1234"; // fallback dev

async function request(path, options = {}) {
  const url = `${API_URL}${path}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
    method: options.method || "GET",
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  try {
    const res = await fetch(url, config);

    // Se a resposta não for OK
    if (!res.ok) {
      let errMsg = "Erro na requisição";

      try {
        const errorData = await res.json();
        errMsg = errorData.message || JSON.stringify(errorData);
      } catch {
        errMsg = res.statusText;
      }

      throw new Error(errMsg);
    }

    // Se tiver conteúdo
    if (res.status !== 204) {
      return await res.json();
    }

    return null;
  } catch (e) {
    console.error(`❌ API Error [${url}]:`, e.message);
    throw e;
  }
}

export const api = {
  get: (path) => request(path),
  delete: (path) =>
    request(path, { method: "DELETE" }),
  post: (path, body) =>
    request(path, { method: "POST", body }),
  put: (path, body) =>
    request(path, { method: "PUT", body }),
};
