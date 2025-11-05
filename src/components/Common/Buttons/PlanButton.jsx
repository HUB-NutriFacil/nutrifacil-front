import styles from "./DescriptionButton.module.css";
import VideoAnimation from "../../Ui/Webm/VideoAnimation";
import AboutText from "../Texts/AboutText";
import SubtitleQuiz from "../Titles/SubtitleQuiz";
import DescriptiveTitle from "../Titles/DescriptiveTitle";
import Callout from "../Spotlights/Callout"
// 1. Receba as props: item (com nome e descricao) e isSelected
function PlanButton({ item, isSelected, preco, onGoToCheckout }) {
    if (!item) return null;
  // 2. Extraia os valores do objeto 'item'
   const nome = item?.nome;
  // const descricao = item?.descricao;
  const img = item?.img;

  // 3. (Opcional) Crie uma lógica para adicionar uma classe CSS se o botão estiver selecionado
  const containerClasses = `${styles.container} ${isSelected ? styles.selected : ''}`;

 const handleClick = () => {
    if (onGoToCheckout) onGoToCheckout();
  };

  return (
    // Adicione a classe dinâmica ao container
    <div className={containerClasses} onClick={handleClick} role="button">
      {/* 4. Use as props para renderizar a imagem/animação */}
      <VideoAnimation name={img} className={styles.webm} />
      <div className={styles.infos}>
        {/* 5. Use as props para o título e a descrição */}
        <SubtitleQuiz variant="descriptive">Plano Personalizado</SubtitleQuiz> 
        <AboutText variant="dietName">{nome}</AboutText>
         <DescriptiveTitle variant="preco"><span>Preço: </span>R${preco}</DescriptiveTitle>
         <Callout variant="plan"> Para mais de 1 mês</Callout>
      </div>
    </div>
  );
}

export default PlanButton;