import React from 'react';

// Reutilize as classes CSS que você já tinha, como 'botoesirevir' e 'btnirevir'
// Se preferir, pode criar um CSS Module específico para este componente.
// import styles from './StepNavigation.module.css';

function StepNavigation({ onPrev, onNext, isNextDisabled = false }) {
  return (
    <div className="botoesirevir">
      {/* O botão "Voltar" só será renderizado se a função onPrev for fornecida */}
      {onPrev && (
        <button className="btnirevir" onClick={onPrev}>
          Voltar
        </button>
      )}
      
      {/* O botão "Próximo" ou "Finalizar" etc., será renderizado com a função onNext */}
      {onNext && (
        <button 
          className="btnirevir" 
          onClick={onNext} 
          disabled={isNextDisabled}
        >
          Próximo
        </button>
      )}
    </div>
  );
}

export default StepNavigation;