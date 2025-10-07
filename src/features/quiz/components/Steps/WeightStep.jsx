import styles from "./WeightStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz"
import Input from "../Common/Inputs/Input";

function WeightStep() {
  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        Qual tipo de dieta você prefere?
      </TitleQuiz>

    <Input/>


    </div>
  );
}

export default WeightStep;
