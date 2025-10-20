// src/features/quiz/components/Common/Buttons/NavigateButton.jsx
import styles from "./NavigateButton.module.css";

function NavigateButton({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "default", // 👈 novo prop
}) {
  // Define o estilo de acordo com o variant
  const variantClass =
    variant === "restart" ? styles.restart : styles.default;

  return (
    <button
      type="button"
      onClick={!disabled ? onClick : undefined}
      className={`${styles.container} ${variantClass} ${className} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {children}
    </button>
  );
}

export default NavigateButton;

// 20/10/2025
// Adicionado prop variant ("restart") no NavigateButton
// --------------------------------------------
// Permite estilizar o botão de "Refazer Quiz" com cor diferenciada
// sem alterar o visual padrão dos botões de navegação.
// by: gabbu (github: gabriellesote)
