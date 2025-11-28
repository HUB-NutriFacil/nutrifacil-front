// src/pages/Load/LoadingDiet.jsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import { api } from "../../services/api";
import styles from "./LoadingDiet.module.css";

export default function LoadingDiet() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // ID do PaymentLink (pl_xxx)
  const paymentLinkId = searchParams.get("tid");

  useEffect(() => {
    if (!paymentLinkId) return;

    const timer = setInterval(async () => {
      try {
        const { data } = await api.get(`/checkout/status/${paymentLinkId}`);

        console.log("📡 Polling status:", data);

        // Backend ainda não recebeu o webhook
        if (data.status === "waiting") {
          console.log("⚠ Aguardando webhook do Pagar.me...");
          return;
        }

        // Pagamento já reconhecido, mas PDF ainda está sendo gerado
        if (data.status === "pending") {
          console.log("⏳ PDF ainda em geração...");
          return;
        }

        // TUDO PRONTO — dietFlow terminou!
        if (data.status === "done") {
          clearInterval(timer);

          navigate("/plan-ready", {
            state: { pdfUrl: data.pdfUrl },
          });
        }
      } catch (err) {
        console.error("❌ Erro no polling:", err);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [paymentLinkId, navigate]);

  return (
    <div className={styles.container}>
      <OrbitProgress color="#02ff98" size="medium" />
      <h2 className={styles.text}>Gerando seu plano personalizado...</h2>
      <p className={styles.subtext}>Isso pode levar alguns segundos</p>
    </div>
  );
}
