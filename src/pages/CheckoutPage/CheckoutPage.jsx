// src/features/quiz/pages/CheckoutPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import styles from "./CheckoutPage.module.css";
import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import NavigateButton from "../../components/Common/Buttons/NavigateButton";
import DescriptiveTitle from "../../components/Common/Titles/DescriptiveTitle";
import InfosAbout from "../../components/Common/Abouts/InfosAbout";
import { calcularIMC } from "../../utils/calcularIMC";
import PaymentPopup from "../../components/Iframe/PaymentPopup";

function CheckoutPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [dados, setDados] = useState({});
  const preco = 1;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);
  }, []);

  const imc = calcularIMC(dados.weight, dados.height);

  const dieta =
    typeof dados.diet === "object" ? dados.diet.nome : dados.diet;

  // 🚀 INICIA O PAGAMENTO
  const handlePayment = async () => {
    setLoading(true);

    try {
      const payload = {
        planName: "Plano Padrão Nutrifacil 30 dias",
        amount: 1,
      };

      const res = await api.post("/checkout/start", payload);

      if (!res?.paymentLink) {
        alert("Erro ao gerar link de pagamento.");
        return;
      }

      // Abre o iframe do pagamento
      setPaymentLink(res.paymentLink);

      // ❌ NÃO REDIRECIONA AQUI  
      // O redirecionamento acontecerá automaticamente após o pagamento,
      // via success_url configurada no backend (para /loading?tid=pl_xxx).

    } catch (e) {
      console.error("Erro ao iniciar checkout:", e);
      alert("Erro ao iniciar pagamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <HeaderQuiz />

      {paymentLink && (
        <PaymentPopup link={paymentLink} onClose={() => setPaymentLink(null)} />
      )}

      <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>

      <InfosAbout
        imc={imc}
        diet={dados.diet}
        preco={preco}
        infos={[
          { label: "Peso", value: `${dados.weight} kg` },
          { label: "Altura", value: `${dados.height} cm` },
          { label: "Idade", value: `${dados.age} anos` },
          { label: "Dieta", value: dieta },
        ]}
      />

      <DescriptiveTitle>
        Clique abaixo para realizar o pagamento:
      </DescriptiveTitle>

      <div className={styles.buttons}>
        <NavigateButton onClick={() => navigate("/sales")}>
          Voltar
        </NavigateButton>

        <NavigateButton onClick={handlePayment}>
          Continuar pagamento 💳
        </NavigateButton>
      </div>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default CheckoutPage;
