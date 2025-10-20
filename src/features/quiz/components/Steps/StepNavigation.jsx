import React from "react";
// Importe o componente Button, styles, etc.

import styles from "./StepNavigation.module.css";
import NavigateButton from "../Common/Buttons/NavigateButton";

function StepNavigation({
  onBack,
  onNext,
  showBackButton,
  nextButtonText,
  disabledNext,
}) {
  return (
    <div className={styles.container}>
      {showBackButton && (
        <NavigateButton onClick={onBack} className="back-button">
          Voltar
        </NavigateButton>
      )}

      {/* A MÁGICA ESTÁ AQUI: Renderiza o botão SÓ SE onNext existir */}
      {onNext && (
        <NavigateButton
          onClick={!disabledNext ? onNext : undefined}
          className={`next-button ${disabledNext ? styles.disabled : ""}`}
        >
          {nextButtonText || "Confirmar"}
        </NavigateButton>
      )}
    </div>
  );
}

export default StepNavigation;
