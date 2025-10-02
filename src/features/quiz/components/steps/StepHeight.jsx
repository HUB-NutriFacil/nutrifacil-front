import React from 'react';
import StepNavigation from '../common/StepNavigation';

function StepHeight({ userData, handleChange, nextStep, prevStep }) {
  const isNextDisabled = !userData.altura || userData.altura <= 0;

  return (
    <div className="divquestion2">
      <div className="divlogocentral">
        <img className="logo" src="/imagens/logogrande.svg" alt="Logo" />
      </div>
      <div className="barrinha">
        <div className="b1c1"></div>
        <div className="b2tp"></div>
        <div className="b3"></div>
        <div className="b4"></div>
      </div>
      <h2 className="Titulo">Qual a sua altura? (Cm)</h2>
      <input
        className="placeholder"
        type="number"
        placeholder="Digite sua altura"
        value={userData.altura}
        onChange={(e) => handleChange("altura", e.target.value)}
      />
      
      <StepNavigation 
        onPrev={prevStep}
        onNext={nextStep}
        isNextDisabled={isNextDisabled}
      />
    </div>
  );
}

export default StepHeight;