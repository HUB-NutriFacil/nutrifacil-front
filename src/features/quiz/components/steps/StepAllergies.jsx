import React, { useState } from 'react';
import MultiSelectOption from '../common/MultiSelectOption';
import StepNavigation from '../common/StepNavigation';

const commonAllergies = ["Leite", "Ovo", "Amendoim", "Soja", "Glúten", "Frutos do mar"];

function StepAllergies({ userData, handleChange, nextStep, prevStep }) {
  const [alergiasSelecionadas, setAlergiasSelecionadas] = useState(
    // Lógica para extrair apenas as alergias comuns do estado global
    commonAllergies.filter(a => userData.alergias?.includes(a))
  );

  const toggleAlergia = (opcao) => {
    setAlergiasSelecionadas((prev) =>
      prev.includes(opcao) ? prev.filter((item) => item !== opcao) : [...prev, opcao]
    );
  };

  const finalizarAlergias = () => {
    const alergiasTexto = userData.alergias || "";
    // Lógica para combinar seleções e texto
    const finalAllergies = [...alergiasSelecionadas, alergiasTexto].filter(Boolean).join(',');
    handleChange("alergias", finalAllergies || "sem restrições");
    nextStep();
  };

  return (
    <div className="divcase7">
      <div className="divquestion2">
        <div className="divlogocentral"><img className="logo" src="/imagens/logogrande.svg" alt="Logo" /></div>
        <div className="barrinha"><div className="b1c1"></div><div className="b2tp"></div><div className="b3tp"></div><div className="b4tp"></div></div>
        <h2 className="Titulo">Você possui alguma alergia alimentar?</h2>
        <h3 className="titulodivisoria">Alergias comuns</h3>
        <div className="grid2">
          {commonAllergies.map((opcao) => (
            <MultiSelectOption
              key={opcao}
              label={opcao}
              isSelected={alergiasSelecionadas.includes(opcao)}
              onClick={() => toggleAlergia(opcao)}
            />
          ))}
        </div>
        <h3 className="titulodivisoria" style={{ marginTop: 24 }}>Outras alergias</h3>
        <input
          className="placeholder2"
          type="text"
          placeholder="Digite outras, separadas por vírgula"
          defaultValue={userData.alergias?.split(',').filter(a => !commonAllergies.includes(a)).join(',')}
          onChange={(e) => handleChange("alergias", e.target.value)}
        />
        <StepNavigation onPrev={prevStep} onNext={finalizarAlergias} />
        <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
      </div>
    </div>
  );
}

export default StepAllergies;