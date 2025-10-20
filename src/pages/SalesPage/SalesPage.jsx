import styles from "../Pages.module.css";
import HeaderQuiz from "../../features/quiz/components/Headers/HeaderQuiz";
import FooterQuiz from "../../features/quiz/components/Footers/FooterQuiz";
import TitleQuiz from "../../features/quiz/components/Common/Titles/TitleQuiz";

function SalesPage() {
  return (
    <div className={styles.container}>
      <HeaderQuiz/>
    <TitleQuiz variant="capitalize"> Seu plano está pronto! </TitleQuiz>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default SalesPage;
