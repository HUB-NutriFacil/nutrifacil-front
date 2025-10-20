import { useState } from "react";
import styles from "../InputStep.module.css";
import TitleQuiz from "../../Common/Titles/TitleQuiz";
import Input from "../../Common/Inputs/Input";

function HeightStep({ onChange }) {
  const [altura, setAltura] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Se apagar tudo → limpa
    if (value === "") {
      setAltura("");
      onChange?.(null);
      return;
    }

    // Converte para número para validação
    const numericValue = parseInt(value, 10);

    // Se não for número → atualiza direto
    if (isNaN(numericValue)) {
      setAltura(value);
      return;
    }

    // 🔒 Impede valores acima de 200 cm (2 metros)
    if (numericValue < 140 || numericValue > 250) {
      setAltura(value); // ainda mostra o número digitado no input
      onChange?.(null); // mas não envia valor válido pro QuizPage
      return;
    }
    // Atualiza normalmente se estiver dentro do limite
    setAltura(value);
    onChange?.(numericValue);
  };

  return (
    <div>
      <TitleQuiz variant="capitalize">Qual a sua altura?</TitleQuiz>

      <div className={styles.container}>
        <Input
          type="text"
          placeholder="Digite sua altura"
          value={altura}
          onChange={handleChange}
          inputMode="numeric" // força teclado numérico em mobile
          maxLength={3}
        />

        <span className={styles.unidade}>cm</span>
      </div>
    </div>
  );
}

export default HeightStep;
