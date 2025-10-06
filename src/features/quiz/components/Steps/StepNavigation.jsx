import React from 'react';
// Importe o componente Button, styles, etc.

import styles from "./StepNavigation.module.css"
import NavigateButton from '../Common/Buttons/NavigateButton';

function StepNavigation({ onBack, onNext, showBackButton, nextButtonText }) {
  return (
    <div className={styles.container}>
      {showBackButton && (
        <NavigateButton onClick={onBack} className="back-button">
          Voltar
        </NavigateButton>
      )}

      {/* A MÁGICA ESTÁ AQUI: Renderiza o botão SÓ SE onNext existir */}
      {onNext && (
        <NavigateButton onClick={onNext} className="next-button">
          {nextButtonText || 'Confirmar'}
        </NavigateButton>
      )}
    </div>
  );
}

export default StepNavigation;