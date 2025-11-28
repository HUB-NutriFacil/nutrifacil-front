// src/pages/Load/LoadingDiet.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import styles from "./LoadingDiet.module.css";

export default function LoadingDiet() {
  const navigate = useNavigate();
  const location = useLocation();

  // Recebe os dados enviados pela CheckoutPage
  const quizData = location.state?.quizData;

  useEffect(() => {
    if (!quizData) return;

    async function generate() {
      try {
        const res = await fetch("http://localhost:6666/checkout/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(quizData),
        });

        const data = await res.json();

        // URL do PDF gerado
        const pdfUrl = data.pdfUrl;

        // Vai para tela final
        navigate("/plan-ready", { state: { pdfUrl, quizData } });
      } catch (error) {
        console.error("Erro ao gerar PDF:", error);
      }
    }

    generate();
  }, [quizData, navigate]);

  return (
    <div className={styles.container}>
      <OrbitProgress
        color="#02ff98"
        size="medium"
        text=""
        textColor="#24f2b3"
      />

      <h2 className={styles.text}>Gerando seu plano personalizado...</h2>
      <p className={styles.subtext}>Isso pode levar alguns segundos</p>
    </div>
  );
}
