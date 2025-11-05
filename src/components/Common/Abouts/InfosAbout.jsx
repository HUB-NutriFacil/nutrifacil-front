// src/components/Common/InfosAbout/InfosAbout.jsx

import SubtitleQuiz from "../Titles/SubtitleQuiz";
import TitleQuiz from "../Titles/TitleQuiz";
import styles from "./InfosAbout.module.css";

import PlanButton from "../Buttons/PlanButton";

function InfosAbout({ imc, infos = [], diet, preco,  onGoToCheckout }) {
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

    <PlanButton item={diet} preco={preco} onGoToCheckout={onGoToCheckout} />

    </div>
  );
}

export default InfosAbout;
