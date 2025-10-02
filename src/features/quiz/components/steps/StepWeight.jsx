// Exemplo em: src/features/quiz/components/steps/StepWeight.jsx
import styles from './styles/Step.module.css';// Importa o CSS Module
import ProgressBar from '../common/ProgressBar';
import StepNavigation from '../common/StepNavigation';

function StepWeight({ userData, handleChange, nextStep, prevStep }) {
  const isNextDisabled = !userData.peso || userData.peso <= 0;

  return (
    // ANTES: <div className="divquestion2">
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/imagens/logogrande.svg" alt="Logo" />
      </div>

      <ProgressBar currentStep={2} /> {/* Componente no lugar da .barrinha */}

      {/* ANTES: <h2 className="Titulo"> */}
      <h2 className={styles.title}>Qual seu peso? (kg)</h2>
      
      {/* ANTES: <input className="placeholder"> */}
      <input
        className={styles.inputField}
        type="number"
        // ... resto das props
      />
      
      <StepNavigation 
        onPrev={prevStep}
        onNext={nextStep}
        isNextDisabled={isNextDisabled}
      />

      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepWeight;