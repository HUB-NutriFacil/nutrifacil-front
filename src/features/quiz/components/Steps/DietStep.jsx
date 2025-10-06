import { useState } from "react"; // Importe o useState para controlar o estado
import styles from "./DietStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz";
import OptionsContainer from "../OptionsContainer/OptionsContainer"; // Ajuste o caminho se necessário
import DescriptionButton from "../Common/Buttons/DescriptionButton"; // Ajuste o caminho se necessário

// Array de dietas que você forneceu
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

function DietStep() {
  // Estado para guardar o ID do item selecionado
  const [selectedDiet, setSelectedDiet] = useState(null);

  // Função que será chamada pelo OptionsContainer quando um item for clicado
  const handleDietSelection = (item) => {
    setSelectedDiet(item.id);
    console.log("Dieta selecionada:", item.nome); // Apenas para teste
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
        {/* Aqui a mágica acontece! */}
        {/* Para cada 'item' no array, renderizamos um DescriptionButton */}
        {(item, isSelected) => (
          <DescriptionButton item={item} isSelected={isSelected} />
        )}
      </OptionsContainer>
    </div>
  );
}

export default DietStep;
