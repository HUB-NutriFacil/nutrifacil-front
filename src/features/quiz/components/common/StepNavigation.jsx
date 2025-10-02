import React from 'react';
import styles from './StepNavigation.module.css';

// Adicionamos a prop `nextText` com um valor padrão de "Próximo"
function StepNavigation({ onPrev, onNext, isNextDisabled = false, nextText = "Próximo" }) {
  return (
    <div className={styles.container}>
      {/* O botão "Voltar" só será renderizado se a função onPrev for fornecida */}
      {onPrev && (
        <button className={styles.button} onClick={onPrev}>
          Voltar
        </button>
      )}
      
      {onNext && (
        <button 
          className={styles.button} 
          onClick={onNext} 
          disabled={isNextDisabled}
        >
          {nextText} {/* Usamos a nova prop aqui */}
        </button>
      )}
    </div>
  );
}

export default StepNavigation;
