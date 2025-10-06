import styles from "./DescriptionButton.module.css";
import VideoAnimation from "../../Webm/VideoAnimation";
import AboutText from "../Texts/AboutText";
import SubtitleQuiz from "../Titles/SubtitleQuiz";

function DescriptionButton() {
  return (
    <div className={styles.container}>
      <VideoAnimation name="cellphoneNutrition" className={styles.webm} />
      <div className={styles.infos}>
        <SubtitleQuiz variant="descriptive">Low Carb</SubtitleQuiz>
        <AboutText variant="descriptive">
          {" "}
          Reduz carboidratos para acelerar a queima de gordura.
        </AboutText>
      </div>
    </div>
  );
}

export default DescriptionButton;
