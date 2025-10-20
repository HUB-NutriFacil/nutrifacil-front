import TitleQuiz from "../../Common/Titles/TitleQuiz.jsx";
import BulletButtonContainer from "../../OptionsContainer/BulletButtonContainer.jsx";
import styles from "../SelectStep.module.css"
import {noEatCategories} from "../../../data/noEatOptions.js"


function NoEatStep() {
  return (
  <div className={styles.container}>
      <TitleQuiz variant="capitalize"> O que você não gostaria de comer? </TitleQuiz>
      


      <BulletButtonContainer
        titulo="Proteínas"
        opcoes={noEatCategories.proteinas}
      />
      <BulletButtonContainer
        titulo="Carboidratos"
        opcoes={noEatCategories.carboidratos}
      />
      <BulletButtonContainer
        titulo="Frutas"
        opcoes={noEatCategories.frutas}
      />
      <BulletButtonContainer
        titulo="Legumes"
        opcoes={noEatCategories.legumes}
      />
      <BulletButtonContainer
        titulo="Verduras"
        opcoes={noEatCategories.verduras}
      />
      <BulletButtonContainer
        titulo="Outros"
        opcoes={noEatCategories.outros}
      />

    </div>
  );
}

export default NoEatStep;
