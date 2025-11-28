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
import Input from "../../components/Common/Inputs/Input";
import DescriptiveTitle from "../../components/Common/Titles/DescriptiveTitle";

function CheckoutPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ nome: "", email: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setForm({
      nome: saved.nome || "",
      email: saved.email || "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;

    if (name === "nome") {
      sanitized = sanitized.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").slice(0, 50);
    }

    if (name === "email") {
      sanitized = sanitized.replace(/[^\w@.\-+]/g, "").slice(0, 50);
    }

    setForm((prev) => ({ ...prev, [name]: sanitized }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.nome.trim()) newErrors.nome = "Informe seu nome";
    if (!form.email.trim()) newErrors.email = "Informe seu e-mail";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Inicia o fluxo real
  const handleGeneratePlan = async () => {
    if (!validateForm()) return;
    setLoading(true);

    const quizData = JSON.parse(localStorage.getItem("quizUserData") || "{}");

    try {
      // 1️⃣ Salva quiz no backend
      await api.post("/quiz/save", {
        userId: 1, // placeholder até autenticarmos
        quizData,
      });

      // 2️⃣ Cria o checkout Pagar.me
      const { data } = await startCheckout({
        planName: "Plano NutriFácil",
        amount: 39.99,
        email: form.email,
      });

      window.location.href = data.paymentLink;
    } catch (error) {
      console.error(error);
      alert("Erro ao iniciar o pagamento");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <HeaderQuiz />

      {loading ? (
        <p className={styles.loading}>Redirecionando para o pagamento...</p>
      ) : (
        <>
          <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>

          <div className={styles.formSection}>
            <DescriptiveTitle>
              Insira seu nome e e-mail para receber sua dieta:
            </DescriptiveTitle>

            <div className={styles.fieldWrapper}>
              <Input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
              />
              {errors.nome && <p className={styles.errorText}>{errors.nome}</p>}
            </div>

            <div className={styles.fieldWrapper}>
              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>
          </div>

          <div className={styles.buttons}>
            <NavigateButton onClick={() => navigate("/sales")}>
              Voltar
            </NavigateButton>

            <NavigateButton onClick={handleGeneratePlan}>
              Continuar para pagamento 💳
            </NavigateButton>
          </div>
        </>
      )}

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default CheckoutPage;
