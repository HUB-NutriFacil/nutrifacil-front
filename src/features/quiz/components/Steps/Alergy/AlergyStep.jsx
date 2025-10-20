// src/features/quiz/components/Steps/AlergyStep.jsx
import TitleQuiz from "../../Common/Titles/TitleQuiz";
import DescriptiveTitle from "../../Common/Titles/DescriptiveTitle";
import BulletButtonContainer from "../../OptionsContainer/BulletButtonContainer";

import { alergiesOptions } from "../../../data/alergiesOptions";
import styles from "../SelectStep.module.css";
import TagInput from "../../Common/Inputs/TagInput";

function AlergyStep() {
  const handleAlergiesChange = (tags) => {
    console.log("Alergias personalizadas:", tags);
  };

  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        Você possui alguma alergia alimentar?
      </TitleQuiz>

      <BulletButtonContainer
        titulo="Alergias Comuns"
        opcoes={alergiesOptions}
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
