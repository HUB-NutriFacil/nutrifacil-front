import React from "react";

// --- MAPA DE IMAGENS ---
// 1. Importe cada arquivo de imagem aqui.
//    O bundler (como o do Create React App) vai transformar isso no caminho final do arquivo.

import ComingSoonDiet from "../../../../../assets/images/embreve.png"


// 2. Crie um objeto que mapeia um nome simples (string) ao caminho da imagem importada.
const imageMap = {
    comingsoonDiet: ComingSoonDiet

  // Adicione novas imagens aqui!
};

/**
 * Componente genérico para renderizar imagens de diversos formatos (PNG, JPG, SVG, etc.).
 * @param {object} props
 * @param {string} props.name - O nome da imagem a ser renderizada (deve existir no imageMap).
 * @param {string} props.alt - O texto alternativo para a imagem (essencial para acessibilidade).
 * @param {string} [props.className] - Classes CSS para estilização.
 * @param {number|string} [props.width] - Largura da imagem.
 * @param {number|string} [props.height] - Altura da imagem.
 * @returns {React.ReactElement|null} O elemento de imagem ou null se não for encontrada.
 */
function ImageComponent({ name, alt, ...props }) {
  // 3. Procure o caminho da imagem no nosso mapa usando o 'name' fornecido.
  const imageSrc = imageMap[name];

  // Se a imagem com o nome fornecido não existir, avisa no console e não renderiza nada.
  if (!imageSrc) {
    console.warn(
      `[ImageComponent] Imagem "${name}" não foi encontrada. Verifique o imageMap.`
    );
    return null;
  }

  // 4. Renderiza o elemento <img>, passando o caminho da imagem, o texto alternativo
  //    e quaisquer outras props recebidas (className, width, height, style, etc.)
  return (
    <img
      src={imageSrc}
      alt={alt}
      {...props} // Espalha outras props como className, width, height, style, etc.
    />
  );
}

export default ImageComponent;