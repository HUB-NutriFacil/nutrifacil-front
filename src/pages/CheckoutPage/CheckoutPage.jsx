// src/features/quiz/pages/CheckoutPage.jsx
import { useEffect, useState } from "react";
import { startCheckout } from "../../services/checkoutApi";
import { useNavigate } from "react-router-dom";

import styles from "./CheckoutPage.module.css";
import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import NavigateButton from "../../components/Common/Buttons/NavigateButton";
import Input from "../../components/Common/Inputs/Input";
import DescriptiveTitle from "../../components/Common/Titles/DescriptiveTitle";

function CheckoutPage({ onBackToSales }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [dados, setDados] = useState({});
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);
    setForm({
      nome: saved.nome || "",
      email: saved.email || "",
      whatsapp: saved.whatsapp || "",
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

    const phoneDigits = form.whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 11) newErrors.whatsapp = "WhatsApp inválido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Novo handle que chama o backend
  const handleGeneratePlan = async () => {
    if (!validateForm()) return;

    const updatedData = { ...dados, ...form };
    localStorage.setItem("quizUserData", JSON.stringify(updatedData));

    try {
      setLoading(true);

      const result = await startCheckout({
        planName: "Plano NutriFácil",
        amount: 3999, // 39,99 (centavos)
        email: updatedData.email,
        quizData: updatedData, // VAI PARA METADATA
      });

      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl; // redireciona ao Pagar.me
      }
    } catch (error) {
      alert("Erro ao iniciar checkout");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <HeaderQuiz />

      {loading ? (
        <p className={styles.loading}>Redirecionando para pagamento...</p>
      ) : (
        <>
          <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>
          ...
          <div className={styles.buttons}>
            <NavigateButton variant="checkout" onClick={onBackToSales}>
              Voltar
            </NavigateButton>
            <NavigateButton variant="checkout" onClick={handleGeneratePlan}>
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
