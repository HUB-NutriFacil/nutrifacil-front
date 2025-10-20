import { useState } from "react";
import styles from "../InputStep.module.css";
import TitleQuiz from "../../Common/Titles/TitleQuiz";
import Input from "../../Common/Inputs/Input";

function WeightStep({ onChange }) {
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
      onChange?.(null); 
      return;
    }

    // Converte para número para validar
    const numericValue = parseFloat(value.replace(",", "."));

    if (isNaN(numericValue)) {
      setPeso(value);
      return;
    }

    // Se ultrapassar 650 → não atualiza (trava)
    if (numericValue > 650) {
      return; // ❌ impede o setPeso, mantendo o último valor válido
    }

    // Se estiver dentro do limite → atualiza normalmente
     setPeso(value);
    onChange?.(numericValue); 
  };

  return (
    <div>
      <TitleQuiz variant="capitalize">Qual o seu peso?</TitleQuiz>

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
