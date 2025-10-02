// src/features/quiz/utils/quizHelpers.js

export function getGifForObjective(objetivo) {
  switch (String(objetivo).toLowerCase()) {
    case "emagrecimento":
      return "/imagens/Animation - 1749211936355.gif";
    case "hipertrofia":
      return "/imagens/Animation - 1749212342747.gif";
    default:
      return "/imagens/default-objective.gif"; // Um gif padrão
  }
}

export function getTextForObjective(objetivo) {
    // Se o objetivo for uma string, capitaliza a primeira letra.
    if (typeof objetivo === 'string' && objetivo.length > 0) {
      return objetivo.charAt(0).toUpperCase() + objetivo.slice(1);
    }
    return "Seu Objetivo";
}

export function getGifForDiet(dieta) {
  switch (String(dieta).toLowerCase()) {
    case "low carb":
      return "/imagens/Animation - 1749142869912.gif";
    case "vegetariana":
      return "/imagens/Animation - 1749132322980.gif";
    case "mediterrânea":
      return "/imagens/Animation - 1749142051509.gif";
    case "cetogênica":
      return "/imagens/Animation - 1749143230081.gif";
    default:
      return "/imagens/default-diet.gif"; // Um gif padrão
  }
}