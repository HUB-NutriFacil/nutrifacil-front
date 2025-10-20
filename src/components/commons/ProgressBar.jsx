// src/components/commons/ProgressBar.jsx
import React from "react";
import styles from "./ProgressBar.module.css";

/**
 * Componente de barra de progresso segmentada e reutilizável.
 * @param {number} props.currentStep - O passo atual (0, 1, 2...).
 * @param {number} props.segments - Quantos segmentos (barrinhas) exibir.
 * @param {number} props.totalSteps - Total de steps do quiz.
 */
const ProgressBar = ({ currentStep, segments, totalSteps }) => {
  // Cada segmento representa quantos steps
  const stepsPerSegment = totalSteps / segments;

  // Progresso total em "unidades de segmento"
  const rawProgress = (currentStep + 0.5) / stepsPerSegment; // +0.5 deixa a primeira pela metade

  // Cria o array de segmentos
  const segmentArray = Array.from({ length: segments });

  return (
    <div className={styles.progressBarContainer}>
      {segmentArray.map((_, index) => {
        const fillLevel = rawProgress - index;

        // Define o estilo de preenchimento de cada barrinha
        let segmentStyle = styles.segment;

        if (fillLevel >= 1) {
          segmentStyle = styles.activeSegment; // totalmente preenchida
        } else if (fillLevel > 0 && fillLevel < 1) {
          segmentStyle = styles.halfSegment; // pela metade
        }

        return <div key={index} className={segmentStyle} />;
      })}
    </div>
  );
};

export default ProgressBar;

/*
20/10/2025 - Adicionada lógica de preenchimento parcial (meia barrinha inicial)
--------------------------------------------
Calcula fração do progresso e aplica estilos diferentes
para barrinhas vazias, cheias e pela metade.
by: gabbu (github: gabriellesote)
*/
