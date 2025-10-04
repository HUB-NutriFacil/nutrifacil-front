import styles from "./GenderStep.module.css";

import TitleQuiz from "../common/TitleQuiz";
import SubtitleQuiz from "../common/SubtitleQuiz";
import Callout from "../common/Callout";
import ProgressBar from "../../../../components/commons/ProgressBar";

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
      
    </div>
  );
}

export default GenderStep;
