// src/features/quiz/components/Common/Buttons/BulletButton.jsx
import styles from "./BulletButton.module.css";

function BulletButton({ children, isSelected, onClick }) {
  return (
    <button
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      type="button"
      onClick={onClick}
    >
      {/* Círculo de seleção */}
      <span className={styles.circle}>
        {isSelected && <span className={styles.innerCircle}></span>}
      </span>

      {/* Texto da opção */}
      <span className={styles.label}>{children}</span>
    </button>
  );
}

export default BulletButton;
