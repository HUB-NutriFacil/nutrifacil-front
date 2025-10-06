import { useState } from "react";
import styles from "./DietStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz";
import OptionsContainer from "../OptionsContainer/OptionsContainer";
import DescriptionButton from "../Common/Buttons/DescriptionButton";

// Array de dietas (sem alterações)
const dietOptions = [
  {
    id: 1,
    img: "lowcarbDiet",
    nome: "Low Carb",
    descricao: "Reduz carboidratos para acelerar a queima de gordura.",
  },
  {
    id: 2,
    img: "ketogenicDiet",
    nome: "Cetogênica",
    descricao: "Alta em gorduras e muito baixa em carboidratos.",
  },
  {
    id: 3,
    img: "mediterraneanDiet",
    nome: "Mediterrânea",
    descricao: "Baseada em alimentos frescos, azeite e peixes.",
  },
  {
    id: 4,
    img: "vegetarianDiet",
    nome: "Vegetariana",
    descricao:
      "Exclui carnes, focando em vegetais e grãos, inclui ovos e derivados de leite.",
  },
  {
    id: 5,
    img: "defloatDiet",
    nome: "Anti-Inflamatória",
    descricao: "Dieta 100% focada na desinflamação corporal.",
  },
  {
    id: 6,
    img: "comingsoonDiet",
    nome: "Vegana",
    descricao: "EM BREVE!! Permite variedade com foco em equilíbrio calórico.",
  },
  {
    id: 7,
    img: "comingsoonDiet",
    nome: "Paleolítica",
    descricao: "EM BREVE!! Inspirada na alimentação dos nossos ancestrais.",
  },
  {
    id: 8,
    nome: "DASH",
    img: "comingsoonDiet",
    descricao: "EM BREVE!! Dieta para controle de pressão arterial.",
  },
  {
    id: 9,
    img: "notsureDiet",
    nome: "Não tenho certeza",
    descricao: "Ajude-me a escolher com base no meu perfil.",
  },
];

// ALTERAÇÃO 1: O componente agora recebe a prop 'onNext'
function DietStep({ onNext }) {
  // Estado para guardar o ID do item selecionado
  const [selectedDiet, setSelectedDiet] = useState(null);

  // Função que será chamada pelo OptionsContainer quando um item for clicado
  const handleDietSelection = (item) => {
    setSelectedDiet(item.id);
    console.log("Dieta selecionada:", item.nome);

    // ALTERAÇÃO 2: Chamamos a função 'onNext' logo após a seleção.
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