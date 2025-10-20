import styles from "../Pages.module.css";
import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";

function SalesPage({ onRestartQuiz }) {
  const handleRestart = () => {
    // 🧹 Limpa tudo que o quiz usou
    localStorage.removeItem("quizUserData");
    localStorage.removeItem("quizCurrentStep");
    localStorage.removeItem("quizFinished");

    // Volta para o App
    if (onRestartQuiz) onRestartQuiz();
  };

  return (
    <div className={styles.container}>
      <HeaderQuiz />
      <TitleQuiz variant="capitalize"> Seu plano está pronto! </TitleQuiz>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default SalesPage;
