// src/features/quiz/components/BulletButtonContainer/BulletButtonContainer.jsx
import { useState } from "react";
import styles from "./BulletButtonContainer.module.css";
import BulletButton from "../Common/Buttons/BulletButton";
import DescriptiveTitle from "../Common/Titles/DescriptiveTitle";

function BulletButtonContainer({ titulo, opcoes }) {
  const [selecionadas, setSelecionadas] = useState([]);

  const toggleOpcao = (opcao) => {
    if (selecionadas.includes(opcao)) {
      setSelecionadas(selecionadas.filter((item) => item !== opcao));
    } else {
      setSelecionadas([...selecionadas, opcao]);
    }
  };

  return (
    <div className={styles.container}>
      <DescriptiveTitle variant="titles">{titulo}</DescriptiveTitle>

      <div className={styles.grid}>
        {opcoes.map((opcao) => (
          <BulletButton
            key={opcao}
            isSelected={selecionadas.includes(opcao)}
            onClick={() => toggleOpcao(opcao)}
          >
            {opcao}
          </BulletButton>
        ))}
      </div>
    </div>
  );
}

export default BulletButtonContainer;
