import { useState } from "react";
import styles from "./QuizPage.module.css";
import HeaderQuiz from "../features/quiz/components/HeaderQuiz";
import FooterQuiz from "../features/quiz/components/FooterQuiz";

// Mantendo o caminho correto para componentes de UI reutilizáveis
import ProgressBar from "../components/commons/ProgressBar";

// 1. Importe todos os seus componentes de step
import GenderStep from "../features/quiz/components/steps/GenderStep";
import DietStep from "../features/quiz/components/steps/DietStep";
// import ObjectiveStep from "../features/quiz/steps/ObjectiveStep"; // Importe os outros quando criá-los

// 2. Crie o "roteiro" do quiz
const quizSteps = [
  { Component: GenderStep },
  { Component: DietStep },
  // { Component: ObjectiveStep },
  // Adicione os outros 10 steps aqui na ordem correta
];

function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);

  // Lógica de controle do ProgressBar
  const TOTAL_SEGMENTS = 4;
  const TOTAL_ACTIVE_STEPS = 9; // Representa os steps de 0 a 8
  const LAST_STEP_WITH_PROGRESS_BAR = 8;
  const shouldShowProgressBar = currentStep <= LAST_STEP_WITH_PROGRESS_BAR;

  // Funções para navegar
  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Instância do ProgressBar criada aqui para ser reutilizada
  const progressBarComponent = shouldShowProgressBar ? (
    <ProgressBar
      segments={TOTAL_SEGMENTS}
      currentStep={currentStep}
      totalActiveSteps={TOTAL_ACTIVE_STEPS}
    />
  ) : null;

  // Pega o componente do step atual dinamicamente
  const { Component: CurrentStepComponent } = quizSteps[currentStep];

  return (
    <div className={styles.container}>
      <HeaderQuiz step={currentStep} />

      {/* NOVO: O ProgressBar padrão só é renderizado aqui para os steps > 0 */}
      {currentStep > 0 && progressBarComponent}

      <main className={styles.stepContainer}>
        {/* NOVO: Lógica de renderização que trata o step 0 de forma especial */}
        {currentStep === 0 ? (
          // Para o primeiro step, renderiza o GenderStep e passa o ProgressBar como uma "peça de Lego"
          <GenderStep
            onNext={handleNext}
            onBack={handleBack}
            progressBarSlot={progressBarComponent}
          />
        ) : (
          // Para todos os outros steps, renderiza o componente de forma padrão
          <CurrentStepComponent onNext={handleNext} onBack={handleBack} />
        )}
      </main>

      <FooterQuiz> Todos os direitos Reservados | NutriFácil™ </FooterQuiz>
    </div>
  );
}

export default QuizPage;
