import React from 'react';
import StepNavigation from '../common/StepNavigation';

function StepWeight({ userData, handleChange, nextStep, prevStep }) {
  const isNextDisabled = !userData.peso || userData.peso <= 0;

  return (
    <div className="divquestion2">
      <div className="divlogocentral">
        <img className="logo" src="/imagens/logogrande.svg" alt="Logo" />
      </div>
      <div className="barrinha">
        <div className="b1c1"></div>
        <div className="b2mp"></div>
        <div className="b3"></div>
        <div className="b4"></div>
      </div>
      <h2 className="Titulo">Qual seu peso? (kg)</h2>
      <input
        className="placeholder"
        type="number"
        placeholder="Digite seu peso"
        value={userData.peso}
        onChange={(e) => handleChange("peso", e.target.value)}
      />
      
      <StepNavigation 
        onPrev={prevStep}
        onNext={nextStep}
        isNextDisabled={isNextDisabled}
      />

      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepWeight;