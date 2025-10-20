import styles from "./Input.module.css";

// Depois (Adicione '...rest' e renomeie as props para 'placeholder' e 'type'):
function Input({ variant, placeholder, type = "text", ...rest }) {
  const inputClasses = `${styles.inputContainer} ${
    variant === "descriptive" ? styles.var : ""
  }`;

  return (
    <div className={inputClasses}>
      {/* O "rest" passa todas as outras props (value, onChange, name, etc.) */}
      <input type={type} placeholder={placeholder} className={styles.input} {...rest} />
    </div>
  );
}

export default Input;
