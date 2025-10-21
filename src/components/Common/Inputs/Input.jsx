// src/features/quiz/components/Common/Inputs/Input.jsx
import styles from "./Input.module.css";

function Input({
  containerVariant = "default",
  inputVariant = "default",
  placeholder,
  type = "text",
  ...rest
}) {
  // 🧩 Variantes para o container
  const containerClasses = {
    default: "",
    descriptive: styles.containerDescriptive,
    checkout: styles.containerCheckout,

  };

  // 🧩 Variantes para o input
  const inputClasses = {
    default: "",
    checkout: styles.inputCheckout,
  };

  const containerClass = containerClasses[containerVariant] || "";
  const inputClass = inputClasses[inputVariant] || "";

  return (
    <div className={`${styles.inputContainer} ${containerClass}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${inputClass}`}
        {...rest}
      />
    </div>
  );
}

export default Input;
