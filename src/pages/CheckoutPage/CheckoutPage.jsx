// src/features/quiz/pages/CheckoutPage.jsx
import { useEffect, useState } from "react";
import styles from "./CheckoutPage.module.css";
import HeaderQuiz from "../../components/Headers/HeaderQuiz";
import FooterQuiz from "../../components/Footers/FooterQuiz";
import TitleQuiz from "../../components/Common/Titles/TitleQuiz";
import NavigateButton from "../../components/Common/Buttons/NavigateButton";
import Input from "../../components/Common/Inputs/Input";
import DescriptiveTitle from "../../components/Common/Titles/DescriptiveTitle";
import { generateDietPdf } from "../../utils/pdfGenerator";

function CheckoutPage({ onBackToSales }) {
  const [dados, setDados] = useState({});
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });

  // 🔹 Pega dados anteriores do quiz ao montar
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);

    // Se o usuário já preencheu o checkout antes, recupera
    setForm({
      nome: saved.nome || "",
      email: saved.email || "",
      whatsapp: saved.whatsapp || "",
    });
  }, []);

  // 🔹 Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Salva no localStorage e gera PDF com todos os dados
  const handleGeneratePlan = () => {
    const updatedData = { ...dados, ...form };
    localStorage.setItem("quizUserData", JSON.stringify(updatedData));
    generateDietPdf(updatedData);
  };

  return (
    <div className={styles.container}>
      <HeaderQuiz />
      <TitleQuiz variant="capitalize">Finalizar Compra</TitleQuiz>

      <div className={styles.formSection}>
        <DescriptiveTitle variant="checkout">
          Insira suas informações para receber seu plano:
        </DescriptiveTitle>

        <Input
          containerVariant="checkout"
          inputVariant="checkout"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome"
        />

        <Input
          containerVariant="checkout"
          inputVariant="checkout"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Seu e-mail"
        />

        <Input
          containerVariant="checkout"
          inputVariant="checkout"
          type="tel"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="Seu WhatsApp"
        />
      </div>

      <div className={styles.buttons}>
        <NavigateButton variant="checkout" onClick={onBackToSales}>
          Voltar
        </NavigateButton>
        <NavigateButton variant="checkout" onClick={handleGeneratePlan}>
          Gerar meu plano
        </NavigateButton>
      </div>

      <FooterQuiz>Todos os direitos Reservados | NutriFácil™</FooterQuiz>
    </div>
  );
}

export default CheckoutPage;
