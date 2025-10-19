import { useState } from "react";
import styles from "./SelectStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz";
import OptionsContainer from "../OptionsContainer/OptionsContainer";
import DescriptionButton from "../Common/Buttons/DescriptionButton";
import { objectiveOptions } from "../../data/objectiveOptions";

// ALTERAÇÃO 1: O componente agora recebe a prop 'onNext'
function ObjectiveStep({ onNext }) {
  // Estado para guardar o ID do item selecionado
  const [selectedObjective, setSelectedObjective] = useState(null);

  // Função que será chamada pelo OptionsContainer quando um item for clicado
  const handleObjectiveSelection = (item) => {
    setSelectedObjective(item.id);
    console.log("Objetivo selecionado:", item.nome);

    // ALTERAÇÃO 2: Chamamos a função 'onNext' logo após a seleção.
    // Isso fará o QuizPage avançar para o próximo passo automaticamente.
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        Qual o seu objetivo?
      </TitleQuiz>

      <OptionsContainer
        items={objectiveOptions}
        onSelectionChange={handleObjectiveSelection}
        selectedValue={selectedObjective}
        selectionType="single"
      >
        {/* Renderização dos botões (sem alterações) */}
        {(item, isSelected) => (
          <DescriptionButton item={item} isSelected={isSelected} />
        )}
      </OptionsContainer>
    </div>
  );
}

export default ObjectiveStep;
