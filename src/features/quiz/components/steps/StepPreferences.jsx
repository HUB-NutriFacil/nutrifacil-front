import React, { useState } from 'react';
import MultiSelectOption from '../common/MultiSelectOption';
import StepNavigation from '../common/StepNavigation';
import { foodData } from './foodData'; // Movi os arrays de comida para um arquivo separado

function StepPreferences({ userData, handleChange, nextStep, prevStep }) {
  // Estado local para controlar as seleções desta tela
  const [selecionadas, setSelecionadas] = useState(
    userData.preferencia ? userData.preferencia.split(',') : []
  );

  const togglePreferencia = (opcao) => {
    setSelecionadas((prev) =>
      prev.includes(opcao) ? prev.filter((item) => item !== opcao) : [...prev, opcao]
    );
  };

  const confirmarPreferencias = () => {
    const preferencias = selecionadas.length > 0 ? selecionadas.join(",") : "sem restrições";
    handleChange("preferencia", preferencias);
    nextStep();
  };

  return (
    <div className="divquestion1">
      <div className="divlogocentral"><img className="logocentral" src="/imagens/logogrande.svg" alt="Logo" /></div>
      <div className="barrinha"><div className="b1c1"></div><div className="b2tp"></div><div className="b3tp"></div><div className="b4mp"></div></div>
      <div className="titulonrml"><h2>O que você 🚫 não gostaria de comer?</h2></div>

      {Object.entries(foodData).map(([category, items]) => (
        <div key={category}>
          <h3 className="titulodivisoria">{category}</h3>
          <div className="grid2">
            {items.map((item) => (
              <MultiSelectOption
                key={item}
                label={item}
                isSelected={selecionadas.includes(item)}
                onClick={() => togglePreferencia(item)}
              />
            ))}
          </div>
        </div>
      ))}
      
      {/* Usamos o StepNavigation mas o botão de próximo aciona a confirmação */}
      <StepNavigation onPrev={prevStep} onNext={confirmarPreferencias} />
      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepPreferences;