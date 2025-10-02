import React from "react";

// Importa os estilos comuns E os específicos desta etapa
import stepStyles from './styles/Step.module.css';
import styles from "./styles/StepDiet.module.css";
import ProgressBar from "../common/ProgressBar";

// Importa as imagens
import logo from "../../../../assets/icons/logo.svg";
import lowCarbGif from "../../../../assets/images/diets/low-carb_diet.gif";
import ketoGif from "../../../../assets/images/diets/ketogenic_diet.gif";
import mediterraneanGif from "../../../../assets/images/diets/mediterranean_diet.gif";
import vegetarianGif from "../../../../assets/images/diets/vegetarian_diet.gif";
import antiInflammatoryGif from "../../../../assets/images/diets/anti-inflamatory_diet.gif";
import unsureGif from "../../../../assets/images/diets/not-sure_diet.gif";

const dietOptions = [
  {
    name: "Low Carb",
    img: lowCarbGif,
    desc: "Reduz carboidratos para acelerar a queima de gordura.",
  },
  {
    name: "Cetogênica",
    img: ketoGif,
    desc: "Alta em gorduras e muito baixa em carboidratos.",
  },
  {
    name: "Mediterrânea",
    img: mediterraneanGif,
    desc: "Baseada em alimentos frescos, azeite e peixes.",
  },
  {
    name: "Vegetariana",
    img: vegetarianGif,
    desc: "Exclui carnes, focando em vegetais e grãos, inclui ovos e derivados de leite.",
  },
  {
    name: "Anti-Inflamatória",
    img: antiInflammatoryGif,
    desc: "Dieta 100% focada na desinflamação corporal.",
  },
  {
    name: "Não tenho certeza",
    img: unsureGif,
    desc: "Ajude-me a escolher com base no meu perfil.",
  },
];

function StepDiet({ handleChange, nextStep }) {
  const handleSelect = (dietName) => {
    handleChange("dieta", dietName);
    nextStep();
  };

  return (
    <div className={stepStyles.container}>
      <div className={stepStyles.logoContainer}>
        <img className={stepStyles.logo} src={logo} alt="Logo Nutrifacil" />
      </div>

      <ProgressBar currentStep={1} />

      <h2 className={stepStyles.title}>Qual tipo de dieta você prefere?</h2>

      {/* ANTES: <div className="dietabtns"> */}
      <div className={styles.optionsList}>
        {dietOptions.map(({ name, desc, img }) => (
          // ANTES: <button className="btndieta">
          <button
            className={styles.optionButton}
            key={name}
            onClick={() => handleSelect(name)}
          >
            {/* ANTES: <img className="imagemdieta"> */}
            <img
              className={styles.optionImage}
              src={img}
              alt={`Dieta ${name}`}
            />
            {/* ANTES: <div className="desctitu"> */}
            <div className={styles.optionTextContainer}>
              {/* ANTES: <div className="titulo-dieta"> */}
              <h3 className={styles.optionTitle}>{name}</h3>
              {/* ANTES: <div className="descricao-dieta"> */}
              <p className={styles.optionDesc}>{desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StepDiet;
