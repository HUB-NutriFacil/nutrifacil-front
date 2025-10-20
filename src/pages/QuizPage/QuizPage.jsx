// src/pages/QuizPage.jsx
import { useState, useEffect } from "react";
import styles from "./QuizPage.module.css";

import HeaderQuiz from "../../features/quiz/components/Headers/HeaderQuiz";
import FooterQuiz from "../../features/quiz/components/Footers/FooterQuiz";
import StepNavigation from "../../features/quiz/components/Steps/StepNavigation";
import ProgressBar from "../../components/commons/ProgressBar";

import GenderStep from "../../features/quiz/components/Steps/Gender/GenderStep";
import DietStep from "../../features/quiz/components/Steps/Diet/DietStep";
import WeightStep from "../../features/quiz/components/Steps/Weight/WeightStep";
import HeightStep from "../../features/quiz/components/Steps/Height/HeightStep";
import AgeStep from "../../features/quiz/components/Steps/Age/AgeStep";
import ObjectiveStep from "../../features/quiz/components/Steps/Objective/ObjectiveStep";
import NoEatStep from "../../features/quiz/components/Steps/NoEat/NoEatStep";
import AlergyStep from "../../features/quiz/components/Steps/Alergy/AlergyStep";

const quizSteps = [
  { Component: GenderStep, name: "Gender" },
  { Component: DietStep, name: "Diet" },
  { Component: WeightStep, name: "Weight" },
  { Component: HeightStep, name: "Height" },
  { Component: AgeStep, name: "Age" },
  { Component: ObjectiveStep, name: "Objective" },
  { Component: NoEatStep, name: "NoEat" },
  { Component: AlergyStep, name: "Alergy" },
];

function QuizPage() {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("quizUserData");
    return saved ? JSON.parse(saved) : {};
  });

  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("quizCurrentStep");
    return savedStep !== null ? parseInt(savedStep, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("quizCurrentStep", currentStep);
  }, [currentStep]);

  useEffect(() => {
    localStorage.setItem("quizUserData", JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

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
    <ProgressBar
      segments={TOTAL_SEGMENTS}
      totalSteps={quizSteps.length}
      currentStep={currentStep}
    />
  ) : null;

  const { Component: CurrentStepComponent } = quizSteps[currentStep];
  const isLastStep = currentStep === quizSteps.length - 1;
  const nextButtonText = isLastStep ? "Finalizar" : "Confirmar";

  // Steps onde o avanço é interno (não precisa do botão Confirmar)
  const stepsWithInternalNext = ["Gender", "Diet", "Objective"];
  const currentStepName = quizSteps[currentStep].name;
  const hasInternalNext = stepsWithInternalNext.includes(currentStepName);

  return (
    <div className={styles.container}>
      <HeaderQuiz step={currentStep} />

      {progressBarComponent}

      <main className={styles.stepContainer}>
        {currentStep === 0 ? (
          // 🧩 Caso especial: GENDER STEP (sem botão de voltar)
          <GenderStep
            onNext={handleNext}
            onChange={(value) => updateUserData("gender", value)}
            progressBarSlot={
              <ProgressBar
                segments={TOTAL_SEGMENTS}
                totalSteps={quizSteps.length}
                currentStep={0}
              />
            }
          />
        ) : (
          <>
            {/* Renderiza o Step atual */}
            <CurrentStepComponent
              onNext={handleNext}
              onChange={(value) =>
                updateUserData(quizSteps[currentStep].name.toLowerCase(), value)
              }
              value={userData[quizSteps[currentStep].name.toLowerCase()] || ""}
            />

            {/* Exibe StepNavigation conforme regras */}
            <StepNavigation
              onBack={currentStep > 0 ? handleBack : undefined}
              onNext={!hasInternalNext ? handleNext : undefined}
              showBackButton={currentStep > 0}
              nextButtonText={nextButtonText}
              disabledNext={(() => {
                const stepName = quizSteps[currentStep].name;

                // Bloquear se os campos obrigatórios estiverem vazios
                if (stepName === "Height" && !userData.height) return true;
                if (stepName === "Weight" && !userData.weight) return true;
                if (stepName === "Age" && !userData.age) return true;

                return false;
              })()}
            />
          </>
        )}
      </main>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default QuizPage;

/*
20/10/2025 - Navegação dinâmica por step (voltar e avançar configuráveis)
--------------------------------------------
Define que apenas alguns steps (Gender, Diet, Objective)
avançam internamente; demais usam o StepNavigation padrão.
by: gabbu (github: gabriellesote)
*/
