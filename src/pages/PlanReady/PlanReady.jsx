// src/pages/PlanReady/PlanReady.jsx
import { useLocation } from "react-router-dom";
import styles from "./PlanReady.module.css";
import Icon from "../../components/Ui/Icon/Icon";
import iconStyle from "../../components/Ui/Icon/Icon.module.css";

import HeaderQuiz from "../../components/Headers/HeaderQuiz";

export default function PlanReady() {
  const location = useLocation();
  const { pdfUrl, quizData } = location.state || {};

  const handleDownload = () => {
    window.open(pdfUrl, "_blank");

    // Opcional: disparar o envio para email/whatsapp
    fetch("http://localhost:6666/notify/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: quizData.email,
        whatsapp: quizData.whatsapp,
        pdfUrl,
      }),
    });
  };

  return (
    <div className={styles.container}>
   <HeaderQuiz variant="planReady" />


 

      <div className={styles.square}>
        <h1 className={styles.title}>Plano Gerado com Sucesso!</h1>

        <p className={styles.text}>
          Clique no botão abaixo para baixar e receber no seu e-mail:
        </p>

        <button className={styles.button} onClick={handleDownload}>
          Baixar Plano + Enviar por Email 
        </button>
      </div>
    </div>
  );
}
