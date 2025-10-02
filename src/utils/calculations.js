// src/utils/calculations.js

export function calcularIMC(peso, altura) {
  if (!peso || !altura || String(peso).trim() === '' || String(altura).trim() === '') {
    return "N/A";
  }
  
  const pesoNum = parseFloat(String(peso).replace(",", "."));
  let alturaNum = parseFloat(String(altura).replace(",", "."));

  if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
    return "N/A";
  }

  // Converte altura em cm para metros
  if (alturaNum > 3) {
    alturaNum /= 100;
  }

  const imc = pesoNum / (alturaNum * alturaNum);
  return imc.toFixed(2);
}
