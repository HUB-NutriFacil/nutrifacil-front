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

  const [errors, setErrors] = useState({});

  // 🔹 Carrega dados salvos
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizUserData") || "{}");
    setDados(saved);
    setForm({
      nome: saved.nome || "",
      email: saved.email || "",
      whatsapp: saved.whatsapp || "",
    });
  }, []);

  // 🔹 Filtros e atualizações
  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;

    if (name === "nome") {
      sanitized = sanitized
        .replace(/[^a-zA-ZÀ-ÿ\s]/g, "") // remove números e símbolos
        .replace(/[\u{1F600}-\u{1F6FF}]/gu, "") // remove emojis
        .slice(0, 50);
    }

    if (name === "email") {
      sanitized = sanitized
        .replace(/[^\w@.\-+]/g, "") // remove caracteres inválidos
        .replace(/[\u{1F600}-\u{1F6FF}]/gu, "") // remove emojis
        .slice(0, 50);
    }

    setForm((prev) => ({ ...prev, [name]: sanitized }));
  };

  // 🔹 Validações
  const validateForm = () => {
    const newErrors = {};

    // Nome
    if (!form.nome.trim()) {
      newErrors.nome = "O nome não pode estar vazio.";
    } else if (form.nome.length > 50) {
      newErrors.nome = "O nome deve ter no máximo 50 caracteres.";
    } else if (/[^a-zA-ZÀ-ÿ\s]/.test(form.nome)) {
      newErrors.nome = "O nome não pode conter números ou símbolos.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Digite um e-mail válido.";
    } else if (form.email.length > 50) {
      newErrors.email = "O e-mail deve ter no máximo 50 caracteres.";
    }

    // WhatsApp
    const phoneDigits = form.whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 11) {
      newErrors.whatsapp = "Digite um número de WhatsApp válido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Envio final
  const handleGeneratePlan = () => {
    if (!validateForm()) return;

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

        {/* Nome */}
        <div className={styles.fieldWrapper}>
          <Input
            containerVariant="checkout"
            inputVariant={errors.nome ? "error" : "checkout"}
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
          />
          {errors.nome && <p className={styles.errorText}>{errors.nome}</p>}
        </div>

        {/* Email */}
        <div className={styles.fieldWrapper}>
          <Input
            containerVariant="checkout"
            inputVariant={errors.email ? "error" : "checkout"}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        {/* WhatsApp */}
        <div className={styles.fieldWrapper}>
          <Input
            containerVariant="checkout"
            inputVariant={errors.whatsapp ? "error" : "checkout"}
            type="tel"
            name="whatsapp"
            value={form.whatsapp}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, ""); // só números

              // Permite apagar tudo
              if (value === "") {
                setForm({ ...form, whatsapp: "" });
                return;
              }

              // Limita a 11 dígitos
              if (value.length > 11) value = value.slice(0, 11);

              // Aplica máscara apenas quando houver números
              if (value.length > 6) {
                value = value.replace(
                  /^(\d{2})(\d{1})(\d{4})(\d{0,4}).*/,
                  "($1) $2 $3$4"
                );
              } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
              } else {
                value = value.replace(/^(\d*)/, "($1");
              }

              setForm({ ...form, whatsapp: value });
            }}
            placeholder="Seu WhatsApp"
          />
          {errors.whatsapp && (
            <p className={styles.errorText}>{errors.whatsapp}</p>
          )}
        </div>
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
