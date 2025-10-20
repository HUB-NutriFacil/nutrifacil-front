import styles from "./NavigateButton.module.css";

function NavigateButton({ children, onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.container}>
      {children}
    </button>
  );
}

export default NavigateButton;
