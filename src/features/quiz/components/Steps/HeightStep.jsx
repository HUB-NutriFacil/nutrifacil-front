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

    // Limita a no máximo 4 dígitos
    if (value.length > 3) value = value.slice(0, 3);

    // Adiciona vírgula automática antes do último dígito
    if (value.length > 1) {
      value = value.slice(0, 1) + "," + value.slice(1);
    }

    // Permite apagar tudo
    if (value === "," || value === "") {
      setAltura("");
      return;
    }

    // Converte para número para validar
    const numericValue = parseFloat(value.replace(",", "."));

    if (isNaN(numericValue)) {
      setAltura(value);
      return;
    }

    // Se ultrapassar 650 → não atualiza (trava)
   if (numericValue > 2.2) {
      return; // trava, mantém o último valor válido
    }
    // Se estiver dentro do limite → atualiza normalmente
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
          maxLength={6}
        />

        <span className={styles.unidade}>cm</span>
      </div>
    </div>
  );
}

export default HeightStep;
