// src/features/quiz/pages/CheckoutPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { startCheckout } from "../../services/checkout";

import styles from "./CheckoutPage.module.css";
import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import NavigateButton from "../../components/Common/Buttons/NavigateButton";
import DescriptiveTitle from "../../components/Common/Titles/DescriptiveTitle";

import PaymentPopup from "../../components/Iframe/PaymentPopup";

function CheckoutPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [transactionId, setTransactionId] = useState(null);

  // 🔄 POLLING PARA ACOMPANHAR STATUS DA DIETA
  const startPolling = (id) => {
    const interval = setInterval(async () => {
      try {
        const { data } = await api.get(`/checkout/status/${id}`);

        if (data.status === "done") {
          clearInterval(interval);
          setPaymentLink(null); // fecha popup
          navigate("/plan-ready"); // navega para página final
        }
      } catch (err) {
        console.error("Erro no polling:", err);
      }
    }, 2000);
  };

  // 🚀 INICIA O FLUXO DE PAGAMENTO
  const handlePayment = async () => {
    setLoading(true);

    try {
      const payload = {
        planName: "Plano Padrão Nutrifacil 30 dias",
        amount: 1, // mesmo preço usado no SalesPage
      };

      const res = await api.post("/checkout/start", payload);

      if (!res?.paymentLink) {
        alert("Erro inesperado ao gerar o link de pagamento.");
        return;
      }

      // Abre popup com o paymentLink
      setPaymentLink(res.paymentLink);

      // Guarda transactionId para polling
      setTransactionId(res.transactionId);

      // Inicia monitoramento
      startPolling(res.transactionId);
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

      {/* POPUP DO PAGAMENTO */}
      {paymentLink && (
        <PaymentPopup
          link={paymentLink}
          onClose={() => setPaymentLink(null)}
        />
      )}

      <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>

      <DescriptiveTitle>
        Clique abaixo para realizar o pagamento:
      </DescriptiveTitle>

      <div className={styles.buttons}>
        <NavigateButton onClick={() => navigate("/sales")}>
          Voltar
        </NavigateButton>

        <NavigateButton onClick={handlePayment}>
          Continuar para pagamento 💳
        </NavigateButton>
      </div>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default CheckoutPage;
