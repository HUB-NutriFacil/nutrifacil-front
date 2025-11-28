import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import { api } from "../../services/api";
import styles from "./LoadingDiet.module.css";

export default function LoadingDiet() {
  const navigate = useNavigate();

  useEffect(() => {
    const quiz = JSON.parse(localStorage.getItem("quizUserData"));
    const name = localStorage.getItem("name") || "Cliente";

    if (!quiz) {
      console.error("❌ Nenhum quiz encontrado!");
      return;
    }

    const generate = async () => {
      try {
        console.log("🧠 Enviando dados para gerar dieta...");

        const gen = await api.post("/checkout/generate-with-data", {
          name,
          quiz
        });

        console.log("📄 PDF gerado:", gen);

        navigate("/plan-ready", {
          state: { pdfUrl: gen.pdfUrl }
        });

      } catch (err) {
        console.error("❌ Erro ao gerar dieta:", err);
      }
    };

    generate();
  }, [navigate]);

  return (
    <div className={styles.container}>
      <OrbitProgress color="#02ff98" size="medium" />
      <h2 className={styles.text}>Gerando seu plano personalizado...</h2>
      <p className={styles.subtext}>Isso pode levar alguns segundos</p>
    </div>
  );
}
