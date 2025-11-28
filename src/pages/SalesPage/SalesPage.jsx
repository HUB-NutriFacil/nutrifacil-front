// src/pages/SalesPage/SalesPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Pages.module.css";

import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import InfosAbout from "../../components/Common/Abouts/InfosAbout";
import VideoAnimation from "../../components/Ui/Webm/VideoAnimation";
import AboutText from "../../components/Common/Texts/AboutText";
import { calcularIMC } from "../../utils/calcularIMC";

import { api } from "../../services/api";

function SalesPage({ onRestartQuiz }) {
  const [dados, setDados] = useState({});
  const preco = 1;
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);
  }, []);

  const imc = calcularIMC(dados.weight, dados.height);

  const objetivo =
    typeof dados.objective === "object"
      ? dados.objective.nome
      : dados.objective;

  const dieta = typeof dados.diet === "object" ? dados.diet.nome : dados.diet;

  // 🔥 Ao clicar para comprar
  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  const handleRestart = () => {
    localStorage.removeItem("quizUserData");
    localStorage.removeItem("quizCurrentStep");
    localStorage.removeItem("quizFinished");
    onRestartQuiz && onRestartQuiz();
  };

  return (
    <div className={styles.container}>
      <HeaderQuiz />

      <TitleQuiz variant="capitalize">Seu plano está pronto!</TitleQuiz>

      <VideoAnimation name={dados.objective?.img} />

      <TitleQuiz variant="soft-title">Para {objetivo}</TitleQuiz>

      <InfosAbout
        imc={imc}
        diet={dados.diet}
        preco={preco}
        onGoToCheckout={handleGoToCheckout} // 👉 NOVA CONEXÃO
        infos={[
          { label: "Peso", value: `${dados.weight} kg` },
          { label: "Altura", value: `${dados.height} cm` },
          { label: "Idade", value: `${dados.age} anos` },
          { label: "Dieta", value: dieta },
        ]}
      />

      <AboutText variant="quizRestart" onClick={handleRestart}>
        Refazer o quiz do começo
      </AboutText>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default SalesPage;
