// src/components/Common/InfosAbout/InfosAbout.jsx
import DescriptionButton from "../Buttons/DescriptionButton";
import SubtitleQuiz from "../Titles/SubtitleQuiz";
import TitleQuiz from "../Titles/TitleQuiz";
import styles from "./InfosAbout.module.css";

function InfosAbout({ imc, infos = [], diet}) {
  return (
    <div className={styles.container}>

    <div className={styles.section}>
 <div className={styles.subSection}>
        <TitleQuiz variant="imc-title">IMC</TitleQuiz>
        <SubtitleQuiz variant="imc-descriptive">{imc}</SubtitleQuiz>
      </div>

      <div className={`${styles.subSection} ${styles.subSection2}`}>
        {infos.map((info, index) => (
          <p key={index}>
            <span>{info.label}:</span> {info.value}
          </p>
        ))}
      </div>
    </div>
     

        <DescriptionButton
        item={diet}
        />

      
    </div>
  );
}

export default InfosAbout;
