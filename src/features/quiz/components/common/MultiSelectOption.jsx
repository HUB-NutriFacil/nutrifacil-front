import React from 'react';
import './MultiSelectOption.css'; // ✨ Crie este arquivo CSS!

function MultiSelectOption({ label, isSelected, onClick }) {
  // A classe 'selected' será adicionada condicionalmente
  const buttonClass = `preferencia-opcao ${isSelected ? 'selected' : ''}`;

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      <span className="checkbox-icon">
        {isSelected && <span className="checkbox-dot"></span>}
      </span>
      {label}
    </button>
  );
}

export default MultiSelectOption;