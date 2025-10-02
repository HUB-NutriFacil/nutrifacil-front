import React from 'react';
import StepNavigation from '../common/StepNavigation';

function StepAge({ userData, handleChange, nextStep, prevStep }) {
  const isNextDisabled = !userData.idade || userData.idade <= 0;

  return (
    <div className="divquestion2">
      <div className="divlogocentral">
        <img className="logo" src="/imagens/logogrande.svg" alt="Logo" />
      </div>
      <div className="barrinha">
        <div className="b1c1"></div>
        <div className="b2tp"></div>
        <div className="b3mp"></div>
        <div className="b4"></div>
      </div>
      <h2 className="Titulo">Qual a sua idade?</h2>
      <h3 className="Subtitulo1">Não vale mentir aqui hein</h3>
      <input
        className="placeholder"
        type="number"
        placeholder="Digite a sua idade"
        value={userData.idade}
        onChange={(e) => handleChange("idade", e.target.value)}
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

export default StepAge;