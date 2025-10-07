import styles from "./WeightStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz"
import Input from "../Common/Inputs/Input";

function WeightStep() {
  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        Qual o seu peso? (kg)
      </TitleQuiz>

    <Input placeholder="Digite o seu peso"/>


    </div>
  );
}

export default WeightStep;
