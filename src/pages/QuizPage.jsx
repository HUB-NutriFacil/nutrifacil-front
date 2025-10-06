import { useState, useEffect } from "react";
import styles from "./QuizPage.module.css";

import HeaderQuiz from "../features/quiz/components/Headers/HeaderQuiz";
import FooterQuiz from "../features/quiz/components/Footers/FooterQuiz";
// ALTERAÇÃO: O caminho correto para o StepNavigation, conforme sua estrutura de pastas
import StepNavigation from "../features/quiz/components/steps/StepNavigation"; 
import ProgressBar from "../components/commons/ProgressBar";

// 1. Seus componentes de step
import GenderStep from "../features/quiz/components/steps/GenderStep";
import DietStep from "../features/quiz/components/steps/DietStep";
// import ObjectiveStep from "../features/quiz/steps/ObjectiveStep";

// 2. O roteiro do quiz
const quizSteps = [
  { Component: GenderStep, name: "Gender" },
  { Component: DietStep, name: "Diet" },
  // Adicione os outros steps aqui
];

function QuizPage() {
  const [currentStep, setCurrentStep] = useState(() => {
  const savedStep = localStorage.getItem("quizCurrentStep");
  // Se houver um passo salvo, converte para número. Senão, começa do 0.
  return savedStep !== null ? parseInt(savedStep, 10) : 0;
});


useEffect(() => {
  // Salva o valor atual do 'currentStep' no localStorage como uma string.
  localStorage.setItem("quizCurrentStep", currentStep);
}, [currentStep]); // Este array faz o efeito rodar toda vez que 'currentStep' mudar.

  // Lógica de controle do ProgressBar (sem alterações)
  const TOTAL_SEGMENTS = 4;
  const LAST_STEP_WITH_PROGRESS_BAR = 8;
  // Ajuste na lógica para ser mais precisa: a barra só aparece APÓS o step 0
  const shouldShowProgressBar = currentStep > 0 && currentStep <= LAST_STEP_WITH_PROGRESS_BAR;

  // Funções para navegar (sem alterações)
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

  // Instância do ProgressBar (sem alterações)
  const progressBarComponent = shouldShowProgressBar ? (
    <ProgressBar
      segments={TOTAL_SEGMENTS}
      currentStep={currentStep}
    />
  ) : null;

  // Pega o componente do step atual dinamicamente (sem alterações)
  const { Component: CurrentStepComponent } = quizSteps[currentStep];

  // ALTERAÇÃO: Lógica centralizada para os botões de navegação
  const isLastStep = currentStep === quizSteps.length - 1;
  const nextButtonText = isLastStep ? "Finalizar" : "Confirmar";


  return (
    <div className={styles.container}>
      <HeaderQuiz step={currentStep} />

      {/* A renderização do ProgressBar está correta */}
      {progressBarComponent}

      <main className={styles.stepContainer}>
        {/* ALTERAÇÃO PRINCIPAL: A lógica de renderização foi atualizada */}
        {currentStep === 0 ? (
          // O GenderStep (step 0) continua sendo um caso especial.
          // Note que ele não precisa mais do onBack, pois não há para onde voltar.
          <GenderStep
            onNext={handleNext}
            progressBarSlot={<ProgressBar segments={TOTAL_SEGMENTS} currentStep={0.5} />}
          />
        ) : (
          // Para TODOS os outros steps, a mágica acontece aqui:
          <>
            {/* 1. Renderiza o componente do step atual, agora sem props de navegação. */}
            <CurrentStepComponent />

            {/* 2. Renderiza nosso "controle remoto" de navegação logo abaixo do step. */}
            <StepNavigation
              onBack={handleBack}
              onNext={handleNext}
              // Não mostra o botão "Voltar" no primeiro step de perguntas (índice 1)
              showBackButton={currentStep > 1}
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