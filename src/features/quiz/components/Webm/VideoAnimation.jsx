import React from "react";


// --- MAPA DE ANIMAÇÕES ---
// 1. Importe cada arquivo .webm aqui.
//    O bundler vai transformar isso no caminho final do arquivo.
import CellphoneNutrition from '../../../../assets/animations/cellphoneNutrition.webm';



// 2. Crie um objeto que mapeia um nome simples (string) ao caminho do vídeo importado.
const videoMap = {
  cellphoneNutrition: CellphoneNutrition,
  // Adicione novas animações aqui!
};

/**
 * Componente genérico para renderizar animações WebM.
 * @param {object} props
 *- @param {string} props.name - O nome da animação a ser renderizada (deve existir no videoMap).
 * @param {string} [props.className] - Classes CSS para estilização.
 * @param {number|string} [props.width] - Largura do vídeo.
 * @param {number|string} [props.height] - Altura do vídeo.
 * @returns {React.ReactElement|null} O elemento de vídeo ou null se não for encontrado.
 */
function VideoAnimation({ name, ...props }) {
  // 3. Procure o caminho do vídeo no nosso mapa usando o 'name' fornecido.
  const videoSrc = videoMap[name];

  // Se a animação com o nome fornecido não existir, avisa no console e não renderiza nada.
  if (!videoSrc) {
    console.warn(
      `[VideoAnimation Component] Animação "${name}" não foi encontrada. Verifique o videoMap.`
    );
    return null;
  }

  // 4. Renderiza o elemento <video> com as props padrão para se comportar como um GIF,
  //    passando o caminho do vídeo e quaisquer outras props recebidas (className, width, etc.)
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      
      {...props} // Espalha outras props como className, width, height, style, etc.
    >
      <source src={videoSrc} type="video/webm" />
      Seu navegador não suporta vídeos WebM.
    </video>
  );
}

export default VideoAnimation;