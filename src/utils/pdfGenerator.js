// src/features/quiz/utils/pdfGenerator.js
import { jsPDF } from "jspdf";

export function generateDietPdf(userData) {
  const doc = new jsPDF();

  const {
    nome = "Não informado",
    email = "Não informado",
    whatsapp = "Não informado",
    diet = "Não informado",
    objetivo = "Não informado",
    peso = "Não informado",
    altura = "Não informado",
    idade = "Não informado",
  } = userData;

  // 🧩 Cabeçalho
  doc.setFontSize(18);
  doc.text("Plano Nutricional - NutriFácil™", 20, 20);
  doc.setFontSize(12);
  doc.text(`Gerado em: ${new Date().toLocaleDateString("pt-BR")}`, 20, 30);

  // 🧍 Dados do usuário
  doc.setFontSize(14);
  doc.text("Informações do Usuário:", 20, 45);
  doc.setFontSize(12);
  doc.text(`Nome: ${nome}`, 20, 55);
  doc.text(`E-mail: ${email}`, 20, 65);
  doc.text(`WhatsApp: ${whatsapp}`, 20, 75);

  // ⚖️ Dados nutricionais
  doc.setFontSize(14);
  doc.text("Informações Nutricionais:", 20, 95);
  doc.setFontSize(12);
  doc.text(`Peso: ${peso} kg`, 20, 105);
  doc.text(`Altura: ${altura} cm`, 20, 115);
  doc.text(`Idade: ${idade} anos`, 20, 125);
  doc.text(`Objetivo: ${objetivo}`, 20, 135);
  doc.text(`Tipo de dieta: ${typeof diet === "object" ? diet.nome : diet}`, 20, 145);

  // 💪 Observação final
  doc.setFontSize(12);
  doc.text(
    "Seu plano nutricional foi gerado com base nas informações fornecidas. Consulte um profissional de saúde antes de iniciar qualquer dieta.",
    20,
    165,
    { maxWidth: 170 }
  );

  // 📎 Salva o arquivo
  doc.save(`Plano_Nutricional_${nome || "usuario"}.pdf`);
}
