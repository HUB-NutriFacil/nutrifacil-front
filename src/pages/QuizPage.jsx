import { useState, useEffect } from "react";
import styles from "./QuizPage.module.css";

import HeaderQuiz from "../features/quiz/components/Headers/HeaderQuiz";
import FooterQuiz from "../features/quiz/components/Footers/FooterQuiz";
import StepNavigation from "../features/quiz/components/Steps/StepNavigation";
import ProgressBar from "../components/commons/ProgressBar";

import GenderStep from "../features/quiz/components/Steps/GenderStep";
import DietStep from "../features/quiz/components/Steps/DietStep";
import WeightStep from "../features/quiz/components/Steps/WeightStep";
import HeightStep from "../features/quiz/components/Steps/HeightStep";
// import ObjectiveStep from "../features/quiz/steps/ObjectiveStep";

const quizSteps = [
  { Component: GenderStep, name: "Gender" },
  { Component: DietStep, name: "Diet" },
  { Component: WeightStep, name: "Weight"},
  { Component: HeightStep, name: "Height"},
  // Adicione os outros steps aqui
];

function QuizPage() {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("quizCurrentStep");
    return savedStep !== null ? parseInt(savedStep, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("quizCurrentStep", currentStep);
  }, [currentStep]);

  const TOTAL_SEGMENTS = 4;
  const LAST_STEP_WITH_PROGRESS_BAR = 8;
  const shouldShowProgressBar =
    currentStep > 0 && currentStep <= LAST_STEP_WITH_PROGRESS_BAR;

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

  const progressBarComponent = shouldShowProgressBar ? (
    <ProgressBar segments={TOTAL_SEGMENTS} currentStep={currentStep} />
  ) : null;

  const { Component: CurrentStepComponent } = quizSteps[currentStep];

  const isLastStep = currentStep === quizSteps.length - 1;
  const nextButtonText = isLastStep ? "Finalizar" : "Confirmar";

  return (
    <div className={styles.container}>
      <HeaderQuiz step={currentStep} />

      {progressBarComponent}

      <main className={styles.stepContainer}>
        {currentStep === 0 ? (
          // CASO 1: GenderStep (sem alterações)
          <GenderStep
            onNext={handleNext}
            progressBarSlot={
              <ProgressBar segments={TOTAL_SEGMENTS} currentStep={0.5} />
            }
          />
        ) : currentStep === 1 ? (
          // CASO 2 (NOVO): DietStep - A ação de avançar está DENTRO do componente.
          <>
            <DietStep onNext={handleNext} />
            <StepNavigation
              onBack={handleBack}
              showBackButton={true}
              // Note que NÃO passamos onNext ou nextButtonText aqui
            />
          </>
        ) : (
          // CASO 3: Todos os outros steps (lógica anterior)
          <>
            <CurrentStepComponent />
            <StepNavigation
              onBack={handleBack}
              onNext={handleNext}
              showBackButton={true} // Sempre mostra "Voltar" após o DietStep
              nextButtonText={nextButtonText}
            />
          </>
        )}
      </main>

      <FooterQuiz> Todos os direitos Reservados | NutriFácil™ </FooterQuiz>
    </div>
  );
}

export default QuizPage;