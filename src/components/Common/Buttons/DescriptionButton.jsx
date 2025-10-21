import styles from "./DescriptionButton.module.css";
import VideoAnimation from "../../Ui/Webm/VideoAnimation";
import AboutText from "../Texts/AboutText";
import SubtitleQuiz from "../Titles/SubtitleQuiz";

// 1. Receba as props: item (com nome e descricao) e isSelected
function DescriptionButton({ item, isSelected }) {
    if (!item) return null;
  // 2. Extraia os valores do objeto 'item'
  const { nome, descricao, img } = item;

  // 3. (Opcional) Crie uma lógica para adicionar uma classe CSS se o botão estiver selecionado
  const containerClasses = `${styles.container} ${isSelected ? styles.selected : ''}`;

  return (
    // Adicione a classe dinâmica ao container
    <div className={containerClasses}>
      {/* 4. Use as props para renderizar a imagem/animação */}
      <VideoAnimation name={img} className={styles.webm} />
      <div className={styles.infos}>
        {/* 5. Use as props para o título e a descrição */}
        <SubtitleQuiz variant="descriptive">{nome}</SubtitleQuiz>
        <AboutText variant="descriptive">{descricao}</AboutText>
      </div>
    </div>
  );
}

export default DescriptionButton;