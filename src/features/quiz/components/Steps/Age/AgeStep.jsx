import { useState } from "react";
import styles from "../InputStep.module.css";
import TitleQuiz from "../../../../../components/Common/Titles/TitleQuiz";
import Input from "../../../../../components/Common/Inputs/Input";

function AgeStep({ onChange }) {
  const [age, setAge] = useState(() => {
    // 🔁 Recupera do localStorage ao montar
    const saved = localStorage.getItem("age");
    return saved ? saved : "";
  });

  const handleChange = (e) => {
    let value = e.target.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Se apagar tudo → limpa
    if (value === "") {
      setAge("");
      return;
    }

    // Converte para número para validação
    const numericValue = parseInt(value, 10);

    // Se não for número → atualiza direto
    if (isNaN(numericValue)) {
      setAge(value);
      return;
    }

    // 🔒 Impede valores acima de 150
    if ( numericValue < 10 ||numericValue > 150) {
       setAge(value);
        onChange?.(null); 
      return; // trava, mantém o último valor válido
    }

    // Atualiza normalmente se estiver dentro do limite
    setAge(value);
    onChange?.(numericValue)
  };

  return (
    <div>
      <TitleQuiz variant="capitalize">Qual a sua idade?</TitleQuiz>

      <div className={styles.container}>
        <Input
          type="text"
          placeholder="Digite sua idade"
          value={age}
          onChange={handleChange}
          inputMode="numeric" // força teclado numérico em mobile
          maxLength={3}
        />

  
      </div>
    </div>
  );
}

export default AgeStep;
