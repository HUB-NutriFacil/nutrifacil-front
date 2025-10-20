// src/utils/calcularTMB.js

/**
 * Calcula a Taxa Metabólica Basal (TMB)
 * Fórmula: Mifflin-St Jeor
 * @param {number|string} peso - Peso em kg (ex: 66.6)
 * @param {number|string} altura - Altura em cm (ex: 130)
 * @param {number|string} idade - Idade em anos
 * @param {"masculino"|"feminino"} sexo - Sexo biológico
 * @returns {string} TMB aproximada em kcal/dia
 */
export function calcularTMB(peso, altura, idade, sexo) {
  if (!peso || !altura || !idade || !sexo) return "Dados insuficientes";

  const p = parseFloat(String(peso).replace(",", "."));
  const a = parseFloat(String(altura).replace(",", "."));
  const i = parseInt(idade, 10);
  const s = String(sexo).toLowerCase();

  if (isNaN(p) || isNaN(a) || isNaN(i) || p <= 0 || a <= 0 || i <= 0)
    return "Dados insuficientes";

  let tmb;

  if (s === "masculino" || s === "homem" || s === "m") {
    tmb = 10 * p + 6.25 * a - 5 * i + 5;
  } else if (s === "feminino" || s === "mulher" || s === "f") {
    tmb = 10 * p + 6.25 * a - 5 * i - 161;
  } else {
    return "Sexo inválido";
  }

  return `${Math.round(tmb)} kcal/dia`;
}
