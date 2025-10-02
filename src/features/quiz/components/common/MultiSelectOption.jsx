import React from 'react';
import styles from './MultiSelectOption.module.css';

function MultiSelectOption({ label, isSelected, onClick }) {
  // Constrói a string de classes, adicionando 'selected' condicionalmente
  const buttonClasses = `
    ${styles.option} 
    ${isSelected ? styles.selected : ''}
  `;

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      <span className={styles.checkboxIcon}>
        {isSelected && <span className={styles.checkboxDot}></span>}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default MultiSelectOption;
