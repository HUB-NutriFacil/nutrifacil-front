import { useState } from "react";
import styles from "../InputStep.module.css";
import TitleQuiz from "../../../components/Common/Titles/TitleQuiz";
import Input from "../../../components/Common/Inputs/Input";

function AgeStep() {
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
    if (numericValue > 150) {
      return; // trava, mantém o último valor válido
    }

    // Atualiza normalmente se estiver dentro do limite
    setAltura(value);
  };

  return (
    <div>
      <TitleQuiz variant="capitalize">Qual a sua idade?</TitleQuiz>

      <div className={styles.container}>
        <Input
          type="text"
          placeholder="Digite sua idade"
          value={altura}
          onChange={handleChange}
          inputMode="numeric" // força teclado numérico em mobile
          maxLength={3}
        />

  
      </div>
    </div>
  );
}

export default AgeStep;
