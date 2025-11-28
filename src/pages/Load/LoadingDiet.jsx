// src/pages/Load/LoadingDiet.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import { api } from "../../services/api";
import styles from "./LoadingDiet.module.css";

export default function LoadingDiet() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const transactionId = searchParams.get("tid"); // vindo do Pagar.me

  useEffect(() => {
    if (!transactionId) return;

    const timer = setInterval(async () => {
      try {
        const { data } = await api.get(`/checkout/status/${transactionId}`);
        const transactionId = localStorage.getItem("transactionId");

        if (data.status === "done") {
          clearInterval(timer);
          navigate("/plan-ready", { state: { pdfUrl: data.pdfUrl } });
        }
      } catch (err) {
        console.error("Erro no polling:", err);
      }
    }, 3000); // pergunta a cada 3s

    return () => clearInterval(timer);
  }, [transactionId, navigate]);

  return (
    <div className={styles.container}>
      <OrbitProgress color="#02ff98" size="medium" />
      <h2 className={styles.text}>Gerando seu plano personalizado...</h2>
      <p className={styles.subtext}>Isso pode levar alguns segundos</p>
    </div>
  );
}
