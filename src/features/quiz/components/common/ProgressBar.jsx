import React from 'react';
import styles from './ProgressBar.module.css';

const TOTAL_STEPS = 11; // Defina o total de etapas

function ProgressBar({ currentStep }) {
  return (
    <div className={styles.container}>
      {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
        let fillPercentage = '0%';
        if (index < currentStep) {
          fillPercentage = '100%';
        } else if (index === currentStep) {
          fillPercentage = '50%'; // A etapa atual fica na metade
        }

        return (
          <div key={index} className={styles.bar}>
            <div 
              className={styles.fill} 
              style={{ width: fillPercentage }} 
            />
          </div>
        );
      })}
    </div>
  );
}
export default ProgressBar;