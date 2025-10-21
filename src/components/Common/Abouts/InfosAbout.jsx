// src/components/Common/InfosAbout/InfosAbout.jsx
import SubtitleQuiz from "../Titles/SubtitleQuiz";
import TitleQuiz from "../Titles/TitleQuiz";
import styles from "./InfosAbout.module.css";

function InfosAbout({ imc, infos = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <TitleQuiz variant="imc-title">IMC</TitleQuiz>
        <SubtitleQuiz variant="imc-descriptive">{imc}</SubtitleQuiz>
      </div>

      <div className={`${styles.section} ${styles.section2}`}>
        {infos.map((info, index) => (
          <p key={index}>
            <span>{info.label}:</span> {info.value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default InfosAbout;
