import { useEffect, useState } from "react";
import styles from "./CheckoutPage.module.css";
import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import NavigateButton from "../../components/Common/Buttons/NavigateButton";
import Input from "../../components/Common/Inputs/Input";
import PlanButton from "../../components/Common/Buttons/PlanButton";

function CheckoutPage({ onBackToSales }) {
  const [dados, setDados] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);
  }, []);

  const preco = 39.99;
  const dieta =
    typeof dados.diet === "object"
      ? dados.diet
      : { nome: dados.diet || "Não informado" };

  return (
    <div className={styles.container}>
      <HeaderQuiz />
      <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>

      {/* 🔹 Mostra o plano selecionado (não clicável) */}
      {/* <div className={styles.planPreview}>
        <PlanButton item={dieta} preco={preco} isSelected={true} />
      </div> */}

      <div className={styles.formSection}>
        <p>Insira suas informações para receber seu plano:</p>
        <Input type="text" placeholder="Seu nome" />
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="tel" placeholder="Seu WhatsApp" />
      </div>

      <div className={styles.buttons}>
        <NavigateButton variant="checkout" onClick={onBackToSales}>
          Voltar
        </NavigateButton>
        <NavigateButton variant="checkout">Gerar meu plano</NavigateButton>
      </div>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default CheckoutPage;

// 20/10/2025
// Correção da exibição do plano no checkout e adição do formulário.
// --------------------------------------------
// Mostra o plano personalizado escolhido, agora como preview fixo (não clicável),
// e coleta nome, e-mail e WhatsApp para envio do plano.
// by: gabbu (github: gabriellesote)
