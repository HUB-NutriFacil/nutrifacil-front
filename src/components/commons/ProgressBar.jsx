import React from 'react';
import styles from './ProgressBar.module.css';

/**
 * Componente de barra de progresso segmentada e reutilizável.
 * @param {object} props
 * @param {number} props.currentStep - O passo atual do processo (baseado em zero, ex: 0, 1, 2...).
 * @param {number} props.totalActiveSteps - O número total de passos que a barra representa (ex: para ir de 0 a 8, são 9 passos).
 * @param {number} props.segments - O número de segmentos visuais a serem exibidos (ex: 4).
 */
const ProgressBar = ({ currentStep, totalActiveSteps, segments }) => {
  // Calcula quantos segmentos devem estar ativos.
  // Usamos Math.ceil para que o primeiro segmento já fique ativo no step 0.
  const numberOfActiveSegments = Math.ceil(
    ((currentStep + 1) / totalActiveSteps) * segments
  );

  // Cria um array com o número de segmentos desejado para renderizá-los
  const segmentArray = Array.from({ length: segments });

  return (
    <div
      className={styles.progressBarContainer}
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin="1"
      aria-valuemax={totalActiveSteps}
    >
      {segmentArray.map((_, index) => (
        <div
          key={index}
          className={
            index < numberOfActiveSegments
              ? styles.activeSegment
              : styles.segment
          }
        />
      ))}
    </div>
  );
};

export default ProgressBar