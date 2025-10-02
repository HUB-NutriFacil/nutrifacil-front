// src/features/quiz/components/steps/StepGender.jsx

import React from 'react';
import { FaChevronRight } from "react-icons/fa";
// Importe seu CSS aqui. Ex: import './StepGender.css';

function StepGender({ handleChange, nextStep }) {
  const handleSelect = (gender) => {
    handleChange("sexo", gender);
    nextStep();
  };

  return (
    <div id="divhomepai">
      <div className="divlogo">
        <img className="logo" src="/imagens/logogrande.svg" alt="Logo" />
      </div>
      <div id="divheadline">
        <h2 className="Titulo">PLANO DE NUTRIÇÃO PERSONALIZADO</h2>
        {/* ... restante do seu HTML/JSX para esta etapa ... */}
        <h2 className="Titulo">SELECIONE SEU GÊNERO</h2>
      </div>
      <div id="divbotao">
        <button className="botaosexomen" onClick={() => handleSelect('homem')}>
          {/* ... conteúdo do botão masculino ... */}
           <span className="textobotao">Masculino</span>
           <FaChevronRight className="iconseta" />
        </button>
        <button className="botaosexwoman" onClick={() => handleSelect('mulher')}>
           {/* ... conteúdo do botão feminino ... */}
           <span className="textobotao">Feminino</span>
           <FaChevronRight className="iconseta" />
        </button>
      </div>
      {/* ... restante do seu HTML/JSX ... */}
    </div>
  );
}

export default StepGender;