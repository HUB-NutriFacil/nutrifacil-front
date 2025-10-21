import TitleQuiz from "../../../../../components/Common/Titles/TitleQuiz.jsx";
import BulletButtonContainer from "../../OptionsContainer/BulletButtonContainer.jsx";
import styles from "../SelectStep.module.css";
import { noEatCategories } from "../../../data/noEatOptions.js";
import { useState } from "react";

function NoEatStep({ onChange }) {
  // 🧠 Estado para guardar as opções selecionadas
  const [selectedNoEat, setSelectedNoEat] = useState([]);

  // Função para alternar seleção
  const handleToggleOption = (option) => {
    setSelectedNoEat((prev) => {
      let updated;
      if (prev.includes(option)) {
        // se já estava selecionado, remove
        updated = prev.filter((item) => item !== option);
      } else {
        // se não estava, adiciona
        updated = [...prev, option];
      }

      // 🔥 envia o estado atualizado pro QuizPage (que salva no localStorage)
      onChange(updated);
      return updated;
    });
  };
  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        {" "}
        O que você não gostaria de comer?{" "}
      </TitleQuiz>

      <BulletButtonContainer
        titulo="Proteínas"
        opcoes={noEatCategories.proteinas}
        onToggle={handleToggleOption}
        selecionados={selectedNoEat}
      />

      <BulletButtonContainer
        titulo="Carboidratos"
        opcoes={noEatCategories.carboidratos}
        onToggle={handleToggleOption}
        selecionados={selectedNoEat}
      />

      <BulletButtonContainer
        titulo="Frutas"
        opcoes={noEatCategories.frutas}
        onToggle={handleToggleOption}
        selecionados={selectedNoEat}
      />

      <BulletButtonContainer
        titulo="Legumes"
        opcoes={noEatCategories.legumes}
        onToggle={handleToggleOption}
        selecionados={selectedNoEat}
      />

      <BulletButtonContainer
        titulo="Verduras"
        opcoes={noEatCategories.verduras}
        onToggle={handleToggleOption}
        selecionados={selectedNoEat}
      />

      <BulletButtonContainer
        titulo="Outros"
        opcoes={noEatCategories.outros}
        onToggle={handleToggleOption}
        selecionados={selectedNoEat}
      />
    </div>
  );
}

export default NoEatStep;
