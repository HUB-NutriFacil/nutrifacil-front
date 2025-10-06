import React from "react";

// --- MAPA DE ÍCONES ---
// 1. Importe cada ícone individualmente aqui.
//    Lembre-se de usar "?react" no final para importá-lo como um componente.
import LogoIcon from '../../../../../assets/icons/logo.svg?react';
import ManImage from "../../../../../assets/images/man.svg?react"
import WomanImage from "../../../../../assets/images/woman.svg?react"
import Arrow from "../../../../../assets/icons/arrow.svg?react"

// 2. Crie um objeto que mapeia um nome simples (string) ao componente importado.
const iconMap = {
  logo: LogoIcon,
  man: ManImage,
  woman: WomanImage,
  arrow: Arrow
  // Adicione novas linhas aqui sempre que criar um novo ícone!
};

/**
 * Componente genérico para renderizar ícones SVG.
 * @param {object} props
 * @param {string} props.name - O nome do ícone a ser renderizado (deve existir no iconMap).
 * @param {string} [props.className] - Classes CSS para estilização.
 * @param {number|string} [props.width] - Largura do ícone.
 * @param {number|string} [props.height] - Altura do ícone.
 * @returns {React.ReactElement|null} O componente do ícone ou null se não for encontrado.
 */
function Icon({ name, ...props }) {
  // 3. Procure o componente no nosso mapa usando o 'name' fornecido.
  const IconComponent = iconMap[name];

  // Se o ícone com o nome fornecido não existir no mapa, avisa no console e não renderiza nada.
  if (!IconComponent) {
    console.warn(
      `[Icon Component] Ícone "${name}" não foi encontrado. Verifique o iconMap.`
    );
    return null;
  }
  // 4. Renderiza o ícone encontrado, passando todas as outras props (className, width, height, etc.)
  return <IconComponent {...props} />;
}

export default Icon;
