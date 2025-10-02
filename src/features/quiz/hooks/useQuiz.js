// src/features/quiz/hooks/useQuiz.js

import { useState, useEffect } from "react";

const TOTAL_STEPS = 11; // Total de etapas do quiz

// Função para pegar dados salvos no localStorage, se existirem
const getInitialState = () => {
  const savedStep = localStorage.getItem("quizStep");
  const savedUserData = localStorage.getItem("userData");

  return {
    step: savedStep ? parseInt(savedStep, 10) : 0,
    userData: savedUserData ? JSON.parse(savedUserData) : {
      dieta: "", peso: "", altura: "", idade: "", sexo: "",
      objetivo: "", preferencia: "", alergias: "", celular: "",
    },
  };
};

export function useQuiz() {
  const [state, setState] = useState(getInitialState);

  // Efeito para salvar o passo atual
  useEffect(() => {
    localStorage.setItem("quizStep", state.step);
  }, [state.step]);

  // Efeito para salvar os dados do usuário
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(state.userData));
  }, [state.userData]);

  const nextStep = () => {
    if (state.step < TOTAL_STEPS - 1) {
      setState(prev => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const prevStep = () => {
    if (state.step > 0) {
      setState(prev => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleChange = (field, value) => {
    setState(prev => ({
      ...prev,
      userData: { ...prev.userData, [field]: value },
    }));
  };

  // Retornamos o estado e as funções para o componente usar
  return {
    currentStep: state.step,
    userData: state.userData,
    nextStep,
    prevStep,
    handleChange,
  };
}