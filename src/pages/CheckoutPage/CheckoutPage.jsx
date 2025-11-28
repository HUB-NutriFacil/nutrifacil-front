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
import PaymentPopup from "../../components/Iframe/PaymentPopup";
import Input from "../../components/Common/Inputs/Input";
import { calcularIMC } from "../../utils/calcularIMC";

function CheckoutPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [dados, setDados] = useState({});
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const preco = 1;

  // 🔥 Carrega dados do quiz
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    const savedName = localStorage.getItem("name") || "";
    const savedCpf = localStorage.getItem("cpf") || "";

    setDados(saved);
    setName(savedName);
    setCpf(savedCpf);
  }, []);

  // 🔥 POLLING baseado no CPF
  const startPaymentPolling = (cpf) => {
    if (!cpf) {
      console.error("❌ Nenhum CPF encontrado para iniciar polling");
      return;
    }

    console.log("🔍 Iniciando polling de pagamento para CPF:", cpf);

    const timer = setInterval(async () => {
      try {
        const res = await api.get(`/checkout/check-payment/${cpf}`);
        console.log("📡 Polling:", res);

        if (res.paid) {
          clearInterval(timer);
          navigate("/loading");
        }
      } catch (err) {
        console.error("❌ Erro no polling:", err);
      }
    }, 3000);

    return () => clearInterval(timer);
  };

  // 🚀 INICIA O PAGAMENTO
  const handlePayment = async () => {
    setLoading(true);

    try {
      if (!name.trim()) {
        alert("Digite seu nome para continuar.");
        setLoading(false);
        return;
      }

      if (!cpf.trim() || cpf.length < 11) {
        alert("Digite um CPF válido.");
        setLoading(false);
        return;
      }

      // salvar nome e CPF no localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("cpf", cpf);

      // 1️⃣ Salvar quiz ANTES do checkout
      const quizRes = await api.post("/checkout/save-quiz", {
        name,
        cpf,
        quizData: dados,
      });

      const quizId = quizRes.quizId;

      // 2️⃣ Criar PaymentLink (envia CPF para o backend)
      const res = await api.post("/checkout/start", {
        planName: "Plano Padrão Nutrifacil 30 dias",
        amount: 1,
        quizId,
        name,
        cpf, // CPF agora é mandado ao backend
      });

      if (!res?.paymentLink) {
        alert("Erro ao gerar link de pagamento.");
        return;
      }

      setPaymentLink(res.paymentLink);

      // 🔥 Inicia polling IMEDIATAMENTE
      startPaymentPolling(cpf);

    } catch (err) {
      console.error("Erro ao iniciar checkout:", err);
      alert("Erro ao iniciar pagamento.");
    } finally {
      setLoading(false);
    }
  };

  const imc = calcularIMC(dados.weight, dados.height);

  return (
    <div className={styles.container}>
      <HeaderQuiz />

      {/* POPUP DO PAGARME */}
      {paymentLink && (
        <PaymentPopup link={paymentLink} onClose={() => setPaymentLink(null)} />
      )}

      <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>

      <DescriptiveTitle>Digite seu nome</DescriptiveTitle>
      <Input
        type="text"
        placeholder="Digite seu nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <DescriptiveTitle>Digite seu CPF</DescriptiveTitle>
      <Input
        type="text"
        placeholder="000.000.000-00"
        value={cpf}
        maxLength={14}
        onChange={(e) => setCpf(e.target.value)}
        inputMode="numeric"
      />

      <div className={styles.buttons}>
        <NavigateButton onClick={() => navigate("/sales")}>
          Voltar
        </NavigateButton>

        <NavigateButton onClick={handlePayment} disabled={loading}>
          {loading ? "Carregando..." : "Continuar pagamento 💳"}
        </NavigateButton>
      </div>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default CheckoutPage;
