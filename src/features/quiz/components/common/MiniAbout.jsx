import styles from "./MiniAbout.module.css";

import DescriptiveTitle from "./Titles/DescriptiveTitle";
import VideoAnimation from "../Webm/VideoAnimation";
import AboutText from "./Texts/AboutText";

function MiniAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.descriptions}>
        <VideoAnimation name="cellphoneNutrition" className={styles.webm} />
        <DescriptiveTitle className={styles.miniAboutTitle}>
          A NutriFácil™ Acaba de Resolver o Seu Problema
        </DescriptiveTitle>
      </div>

      <AboutText>
        Com o nosso plano de nutrição personalizado, você terá acesso a um
        cardápio adaptado, planejado por nutricionistas, para atender às suas
        necessidades e objetivos, tudo isso em menos de 5 minutos!
      </AboutText>
    </div>
  );
}

export default MiniAbout;
