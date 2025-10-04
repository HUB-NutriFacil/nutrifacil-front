import styles from "./HeaderQuiz.module.css";
import iconStyle from "./Icon/Icon.module.css"
import Icon from "./Icon/Icon";

// 1. Adicione { step } como um parâmetro para receber a prop do componente pai.
function HeaderQuiz({ step }) {
  // 2. Crie uma variável para a classe modificadora usando uma condição.
  // Se 'step' for 0, use 'headerContainerStart'. Caso contrário, use 'headerContainerCentered'.
  const modifierClass =
    step === 0 ? styles.headerContainerStart : styles.headerContainerCentered;

  return (
    // 3. Combine a classe base com a classe modificadora que foi escolhida.
    <div className={`${styles.headerContainer} ${modifierClass}`}>
      <Icon name="logo" alt="Logo escrito NutriFácil" className={iconStyle.logo} />
    </div>
  );
}

export default HeaderQuiz;
