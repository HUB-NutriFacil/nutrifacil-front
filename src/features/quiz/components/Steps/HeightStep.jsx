import { useState } from "react";
import styles from "./WeightStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz";
import Input from "../Common/Inputs/Input";

function HeightStep() {
  const [altura, setAltura] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Se apagar tudo → limpa
    if (value === "") {
      setAltura("");
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
    if (numericValue > 200) {
      return; // trava, mantém o último valor válido
    }

    // Atualiza normalmente se estiver dentro do limite
    setAltura(value);
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
