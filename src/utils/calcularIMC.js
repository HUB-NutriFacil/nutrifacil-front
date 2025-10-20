// src/utils/calcularIMC.js

/**
 * Calcula o IMC (Índice de Massa Corporal)
 * @param {number|string} peso - Peso em kg (ex: 66.6)
 * @param {number|string} altura - Altura em cm (ex: 130)
 * @returns {string} IMC formatado com 2 casas decimais ou "Dados insuficientes"
 */
export function calcularIMC(peso, altura) {
  if (!peso || !altura) return "Dados insuficientes";

  const pesoNum = parseFloat(String(peso).replace(",", "."));
  let alturaNum = parseFloat(String(altura).replace(",", "."));

  if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0)
    return "Dados insuficientes";

  // Converter centímetros → metros
  if (alturaNum > 3) alturaNum = alturaNum / 100;

  const imc = pesoNum / (alturaNum * alturaNum);
  return imc.toFixed(2);
}

/**
 * Retorna a classificação do IMC
 * @param {string|number} imc - Valor numérico do IMC
 * @returns {string} Categoria do IMC
 */
export function classificarIMC(imc) {
  const valor = parseFloat(imc);
  if (isNaN(valor)) return "—";

  if (valor < 18.5) return "Abaixo do peso";
  if (valor < 24.9) return "Peso normal";
  if (valor < 29.9) return "Sobrepeso";
  if (valor < 34.9) return "Obesidade grau I";
  if (valor < 39.9) return "Obesidade grau II";
  return "Obesidade grau III";
}
