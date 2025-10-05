import styles from "./GenderStep.module.css";

import TitleQuiz from "../common/Titles/TitleQuiz";
import SubtitleQuiz from "../common/Titles/SubtitleQuiz";
import Callout from "../common/Callout";
import LargeButton from "../common/Buttons/LargeButton";
import MiniAbout from "../common/MiniAbout";

function GenderStep({ onNext, onBack, progressBarSlot }) {
  return (
    <div className={styles.container}>
      <TitleQuiz>Plano de nutrição personalizado</TitleQuiz>

      <SubtitleQuiz>
        Segundo seus objetivos e metas de saúde, de acordo com seus dados e
        necessidades.
      </SubtitleQuiz>

      <Callout>Menos de 5 minutos</Callout>

      {progressBarSlot}
      <TitleQuiz>Selecione seu gênero</TitleQuiz>

      {/* NOVO: Container para os botões */}
      <div className={styles.optionsContainer}>
        {/* Usando o LargeButton para a opção "Masculino" */}
        <LargeButton iconName="man" iconAlt="Um homem" title="Masculino" />

        {/* Usando o LargeButton para a opção "Feminino" */}
        <LargeButton iconName="woman" iconAlt="Uma mulher" title="Feminino" />
      </div>

      <MiniAbout/>
    </div>
  );
}

export default GenderStep;
