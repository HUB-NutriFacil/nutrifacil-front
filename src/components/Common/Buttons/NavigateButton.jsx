// src/features/quiz/components/Common/Buttons/NavigateButton.jsx
import styles from "./NavigateButton.module.css";

function NavigateButton({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "default",
}) {
  // ✅ Crie um mapa de variants
  const variantMap = {
    default: styles.default,
    restart: styles.restart,
    checkout: styles.checkout,
    confirm: styles.confirm,
    outline: styles.outline,
  };

  // ✅ Busca o estilo correspondente ou usa default
  const variantClass = variantMap[variant] || styles.default;

  return (
    <button
      type="button"
      onClick={!disabled ? onClick : undefined}
      className={`${styles.container} ${variantClass} ${className} ${
        disabled ? styles.disabled : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default NavigateButton;

// 20/10/2025
// Corrigida lógica de variants no botão e adicionado suporte para múltiplos estilos.
// --------------------------------------------
// Usa um mapa de variants para permitir novos tipos sem ifs aninhados.
// by: gabbu (github: gabriellesote)
