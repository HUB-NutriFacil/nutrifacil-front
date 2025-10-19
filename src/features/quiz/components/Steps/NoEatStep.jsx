import TitleQuiz from "../Common/Titles/TitleQuiz";
import BulletButtonContainer from "../OptionsContainer/BulletButtonContainer";

import {noEatCategories} from "../../data/noEat.js"


function NoEatStep() {
  return (
    <div>
      <TitleQuiz variant="capitalize"> O que você não come? </TitleQuiz>
      

  <div>
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
    </div>
  );
}

export default NoEatStep;
