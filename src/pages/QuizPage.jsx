import { useState } from "react";
import styles from "./QuizPage.module.css";
import HeaderQuiz from "../features/quiz/components/HeaderQuiz";
import TitleQuiz from "../features/quiz/components/common/TitleQuiz";

function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
 
  return (
    <div className={styles.container}>
      <HeaderQuiz step={currentStep} />
      <TitleQuiz>Plano de nutrição personalizado</TitleQuiz>
    </div>
  );
}

export default QuizPage;
