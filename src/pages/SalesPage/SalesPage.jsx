// src/pages/SalesPage/SalesPage.jsx
import { useEffect, useState } from "react";
import styles from "../Pages.module.css";

import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import NavigateButton from "../../components/Common/Buttons/NavigateButton";
import { calcularIMC } from "../../utils/calcularIMC";

import InfosAbout from "../../components/Common/Abouts/InfosAbout";
import VideoAnimation from "../../components/Ui/Webm/VideoAnimation";

// Função auxiliar: escolhe o GIF conforme o objetivo

function SalesPage({ onRestartQuiz, onGoToCheckout }) {
  const [dados, setDados] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);
  }, []);

  // 🧩 Variáveis derivadas (deixam o JSX limpo)
  const peso = dados.weight || "Não informado";
  const altura = dados.height || "Não informado";
  const idade = dados.age || "Não informado";
  const imc = calcularIMC(dados.weight, dados.height);
  const preco = 39.99;
  const dieta =
    typeof dados.diet === "object"
      ? dados.diet.nome
      : dados.diet || "Não informado";

  const objetivo =
    typeof dados.objective === "object"
      ? dados.objective.nome
      : dados.objective || "Não informado";

  // 🔄 Função para reiniciar quiz
  const handleRestart = () => {
    localStorage.removeItem("quizUserData");
    localStorage.removeItem("quizCurrentStep");
    localStorage.removeItem("quizFinished");
    if (onRestartQuiz) onRestartQuiz();
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
        onGoToCheckout={onGoToCheckout}
        infos={[
          { label: "Peso", value: `${peso} kg` },
          { label: "Altura", value: `${altura} cm` },
          { label: "Idade", value: `${idade} anos` },
          { label: "Dieta", value: dieta },
        ]}
      />

      <NavigateButton variant="restart" onClick={handleRestart}>
        Refazer Quiz
      </NavigateButton>
      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default SalesPage;

// 20/10/2025
// Removido GIF da dieta; mantido apenas GIF principal do objetivo.
// --------------------------------------------
// A tela agora foca nas informações essenciais do usuário e no botão de checkout,
// mantendo o design mais limpo e direto.
// by: gabbu (github: gabriellesote)
