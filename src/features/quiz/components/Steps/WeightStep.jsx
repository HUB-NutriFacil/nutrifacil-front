import { useState } from "react";
import styles from "./WeightStep.module.css";
import TitleQuiz from "../Common/Titles/TitleQuiz";
import Input from "../Common/Inputs/Input";

function WeightStep() {
  const [peso, setPeso] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Limita a no máximo 4 dígitos
    if (value.length > 4) value = value.slice(0, 4);

    // Adiciona vírgula automática antes do último dígito
    if (value.length > 1) {
      value = value.slice(0, -1) + "," + value.slice(-1);
    }

    // Permite apagar tudo
    if (value === "," || value === "") {
      setPeso("");
      return;
    }

    // Converte para número para validar
    const numericValue = parseFloat(value.replace(",", "."));

    // Atualiza normalmente o que o usuário digita
    setPeso(value);

    // Se o usuário digitou um valor completo fora do limite → reseta
    if (numericValue > 650) {
      setPeso();
    }
  };

  return (
    <div>
      <TitleQuiz variant="capitalize">Qual o seu peso? (kg)</TitleQuiz>

      <div className={styles.container}>
        <Input
          type="text"
          placeholder="Digite seu peso"
          value={peso}
          onChange={handleChange}
          inputMode="numeric" // força teclado numérico em mobile
          maxLength={6}
        />

        <span className={styles.unidade}>kg</span>
      </div>
    </div>
  );
}

export default WeightStep;
