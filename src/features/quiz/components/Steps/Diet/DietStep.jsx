import { useState } from "react";
import styles from "../SelectStep.module.css";
import TitleQuiz from "../../../../../components/Common/Titles/TitleQuiz";
import OptionsContainer from "../../OptionsContainer/OptionsContainer";
import DescriptionButton from "../../../../../components/Common/Buttons/DescriptionButton";
import { dietOptions } from "../../../data/dietOptions";

// ALTERAÇÃO 1: O componente agora recebe a prop 'onNext'
function DietStep({ onNext, onChange }) {
  // Estado para guardar o ID do item selecionado
  const [selectedDiet, setSelectedDiet] = useState(null);

  // Função que será chamada pelo OptionsContainer quando um item for clicado
  const handleDietSelection = (item) => {
    setSelectedDiet(item.id);
    console.log("Dieta selecionada:", item.nome);

    const selectedData = {
      id: item.id,
      nome: item.nome,
      img: item.img
    };
    // Salva no estado global e no localStorage
    onChange(selectedData);

    // Isso fará o QuizPage avançar para o próximo passo automaticamente.
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className={styles.container}>
      <TitleQuiz variant="capitalize">
        Qual tipo de dieta você prefere?
      </TitleQuiz>

      <OptionsContainer
        items={dietOptions}
        onSelectionChange={handleDietSelection}
        selectedValue={selectedDiet}
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

export default DietStep;
