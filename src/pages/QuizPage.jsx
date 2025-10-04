import { useState } from "react";
import styles from "./QuizPage.module.css";
import HeaderQuiz from "../features/quiz/components/HeaderQuiz";
import TitleQuiz from "../features/quiz/components/common/TitleQuiz";
import SubtitleQuiz from "../features/quiz/components/common/SubtitleQuiz";
import Callout from "../features/quiz/components/common/Callout";
function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
 
  return (
    <div className={styles.container}>
      <HeaderQuiz step={currentStep} />
      <TitleQuiz>Plano de nutrição personalizado</TitleQuiz>
      <SubtitleQuiz>Segundo seus objetivos e metas de saúde, de acordo com seus dados e necessidades.</SubtitleQuiz>
      <Callout>Menos de 5 minutos</Callout>
    </div>
  );
}

export default QuizPage;
