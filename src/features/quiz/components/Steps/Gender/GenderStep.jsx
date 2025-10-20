import styles from "./GenderStep.module.css";

import TitleQuiz from "../../../../../components/Common/Titles/TitleQuiz";
import SubtitleQuiz from "../../../../../components/Common/Titles/SubtitleQuiz";
import Callout from "../../../../../components/Common/Spotlights/Callout";
import LargeButton from "../../../../../components/Common/Buttons/LargeButton";
import MiniAbout from "../../../../../components/Common/Abouts/MiniAbout";

// ALTERAÇÃO: Removi a prop 'onBack' pois não é usada neste step.
function GenderStep({ onNext, onChange,progressBarSlot }) {

  // NOVO: Uma função para lidar com a seleção de gênero.
  // Isso torna o código mais limpo e preparado para o futuro.
  const handleGenderSelect = (selectedGender) => {
    console.log(`Gênero selecionado: ${selectedGender}`);

    /// 🧠 Salva o gênero no estado global (via QuizPage)
    onChange(selectedGender);

    
    // Chama a função recebida via props para avançar para o próximo step.
    onNext(); 
  };

  return (
    <div className={styles.container}>
      <TitleQuiz >Plano de nutrição personalizado</TitleQuiz>

      <SubtitleQuiz>
        Segundo seus objetivos e metas de saúde, de acordo com seus dados e
        necessidades.
      </SubtitleQuiz>

      <Callout>Menos de 5 minutos</Callout>

      {progressBarSlot}
      <TitleQuiz>Selecione seu gênero</TitleQuiz>

      <div className={styles.optionsContainer}>
        {/* ALTERAÇÃO: Adicionamos o evento onClick em cada botão.
          Usamos uma arrow function para chamar nossa nova função handleGenderSelect.
        */}
        <LargeButton 
          imageName="man" 
          imageAlt="Um homem" 
          title="Masculino" 
          onClick={() => handleGenderSelect("Masculino")} 
        />

        <LargeButton 
          imageName="woman" 
          imageAlt="Uma mulher" 
          title="Feminino" 
          onClick={() => handleGenderSelect("Feminino")} 
        />
      </div>

      <MiniAbout/>
    </div>
  );
}

export default GenderStep;