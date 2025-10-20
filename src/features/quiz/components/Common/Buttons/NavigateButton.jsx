import styles from "./NavigateButton.module.css";

function NavigateButton({
  children,
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={!disabled ? onClick : undefined}
      className={`${styles.container} ${className} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {children}
    </button>
  );
}

export default NavigateButton;
