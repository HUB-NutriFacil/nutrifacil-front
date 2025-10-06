import styles from "./StepNavigation.module.css";
import NavigateButton from "../common/Buttons/NavigateButton";

// CORREÇÃO: As props são recebidas como um objeto aqui nos parênteses.
// É aqui que desestruturamos e definimos os valores padrão.
function StepNavigation({
  onBack,
  onNext,
  showBackButton = true,
  nextButtonText = "Confirmar",
}) {
  return (
    // CORREÇÃO: Acredito que aqui seja 'styles' (plural) para bater com o nome da importação.
    <div className={styles.container}>
      {showBackButton && (
        <NavigateButton onClick={onBack} variant="secondary">
          Voltar
        </NavigateButton>
      )}
      <NavigateButton onClick={onNext} variant="primary">
        {nextButtonText}
      </NavigateButton>
    </div>
  );
}

export default StepNavigation;