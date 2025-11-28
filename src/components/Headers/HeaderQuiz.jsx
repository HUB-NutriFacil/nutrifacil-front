// src/features/quiz/components/HeaderQuiz/HeaderQuiz.jsx
import styles from "./HeaderQuiz.module.css";
import iconStyle from "../Ui/Icon/Icon.module.css";
import Icon from "../Ui/Icon/Icon";

function HeaderQuiz({ step, variant }) {
  const modifierClass =
    step === 0 ? styles.headerContainerStart : styles.headerContainerCentered;

  // Se veio uma variant, aplica também
  const variantClass = variant ? styles[`headerVariant__${variant}`] : "";

  return (
    <div className={`${styles.headerContainer} ${modifierClass} ${variantClass}`}>
      <Icon name="logo" alt="Logo escrito NutriFácil" className={iconStyle.logo} />
    </div>
  );
}

export default HeaderQuiz;
