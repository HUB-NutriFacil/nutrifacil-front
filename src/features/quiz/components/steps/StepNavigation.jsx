import styles from "./StepNavigation.module.css"

import NavigateButton from "../common/Buttons/NavigateButton"

function StepNavigation(){
     onBack, 
  onNext, 
  showBackButton = true, // Por padrão, mostra o botão de voltar
  nextButtonText = "Confirmar" // Texto padrão para o botão de avançar

    return(
        <div className={style.container}>
           {showBackButton && (
        <NavigateButton onClick={onBack} variant="secondary">
          Voltar
        </NavigateButton>
      )}
      <NavigateButton onClick={onNext} variant="primary">
        {nextButtonText}
      </NavigateButton>
        </div>
    )
}

export default StepNavigation