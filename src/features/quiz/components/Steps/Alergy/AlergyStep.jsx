// src/features/quiz/components/Steps/AlergyStep.jsx
import TitleQuiz from "../../Common/Titles/TitleQuiz";
import DescriptiveTitle from "../../Common/Titles/DescriptiveTitle";
import BulletButtonContainer from "../../OptionsContainer/BulletButtonContainer";

import { alergiesOptions } from "../../../data/alergiesOptions";
import styles from "../SelectStep.module.css";
import TagInput from "../../Common/Inputs/TagInput";
import { useState } from "react";

function AlergyStep({ onChange }) {
  // 🧠 Estado para guardar todas as alergias (botões + digitadas)
  const [selectedAlergies, setSelectedAlergies] = useState([]);

  // 🔘 Alternar seleção de alergias pré-definidas
  const handleToggleOption = (option) => {
    setSelectedAlergies((prev) => {
      let updated;
      if (prev.includes(option)) {
        updated = prev.filter((item) => item !== option);
      } else {
        updated = [...prev, option];
      }

      if (onChange) onChange(updated);
      return updated;
    });
  };

  const handleAlergiesChange = (tags) => {
    // Mantém as pré-definidas + as tags digitadas
    const updated = [
      ...selectedAlergies.filter((a) => alergiesOptions.includes(a)),
      ...tags,
    ];
    setSelectedAlergies(updated);
    if (onChange) onChange(updated);
  };

  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        Você possui alguma alergia alimentar?
      </TitleQuiz>

      <BulletButtonContainer
        titulo="Alergias Comuns"
        opcoes={alergiesOptions}
        onToggle={handleToggleOption}
        selecionados={selectedAlergies}
      />

      <DescriptiveTitle variant="titles">Outras Alergias</DescriptiveTitle>

      <TagInput
        placeholder="Digite e pressione Enter ou vírgula"
        onChange={handleAlergiesChange}
        limit={10}
      />
    </div>
  );
}

export default AlergyStep;
