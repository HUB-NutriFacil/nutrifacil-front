// src/features/quiz/pages/QuizPage.jsx

import React from 'react';
import { useQuiz } from '../hooks/useQuiz';

// Importando TODOS os componentes de etapa
import StepGender from '../components/steps/StepGender';
import StepDiet from '../components/steps/StepDiet';
import StepWeight from '../components/steps/StepWeight';
import StepHeight from '../components/steps/StepHeight';
import StepAge from '../components/steps/StepAge';
import StepObjective from '../components/steps/StepObjective';
import StepPreferences from '../components/steps/StepPreferences';
import StepAllergies from '../components/steps/StepAllergies';
import StepSalesPage from '../components/steps/StepSalesPage';
import StepWpp from '../components/steps/StepWpp';
import StepCheckout from '../components/steps/StepCheckout';

const steps = [
  StepGender,      // 0
  StepDiet,        // 1
  StepWeight,      // 2
  StepHeight,      // 3
  StepAge,         // 4
  StepObjective,   // 5
  StepPreferences, // 6
  StepAllergies,   // 7
  StepSalesPage,   // 8
  StepWpp,         // 9
  StepCheckout,    // 10
];

function QuizPage() {
  const { currentStep, userData, nextStep, prevStep, handleChange } = useQuiz();
  const CurrentStepComponent = steps[currentStep];

  if (!CurrentStepComponent) {
    // A lógica de finalização agora está no hook useQuiz e no App.jsx original
    return <div>Quiz finalizado!</div>;
  }

  return (
    <div className="quiz-container">
      <CurrentStepComponent
        userData={userData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
}

export default QuizPage;