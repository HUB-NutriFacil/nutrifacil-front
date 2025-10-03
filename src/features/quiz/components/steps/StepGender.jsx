import React from 'react';
import { FaChevronRight } from "react-icons/fa";

// 1. Importa os estilos comuns e os específicos desta etapa
import styles from './styles/Step.module.css';
import stepStyles from './styles/StepGender.module.css';

// 2. Importa componentes e imagens
import ProgressBar from '../common/ProgressBar';
import logo from '../../../../assets/icons/logo.svg';
import homemImg from '../../../../assets/images/men.svg';
import mulherImg from '../../../../assets/images/woman.svg';
import giftImg from '../../../../assets/images/cellphone.gif';

function StepGender({ handleChange, nextStep }) {
  const handleSelect = (gender) => {
    handleChange("sexo", gender);
    nextStep();
  };

  return (
    // ANTES: <div id="divhomepai">
    <div className={stepStyles.container}>
      {/* ANTES: <div className="divlogo"> */}
      <div className={stepStyles.logoContainer}>
        <img className={stepStyles.logo} src={logo} alt="Logo Nutrifacil" />
      </div>

      {/* ANTES: <div id="divheadline"> */}
      <div className={stepStyles.headline}>
        <h2 className={styles.title}>PLANO DE NUTRIÇÃO PERSONALIZADO</h2>
        <h3 className={styles.subtitle}>
          Segundo seus objetivos e metas de saúde, de acordo com seus dados e necessidades.
        </h3>
        {/* ✨ Elemento que estava faltando, adicionado de volta */}
        <h3 className={stepStyles.tag}>Menos de 5 minutos</h3>
      </div>
      
      <ProgressBar currentStep={0} />

      <h2 className={styles.title}>SELECIONE SEU GÊNERO</h2>
      
      {/* ANTES: <div id="divbotao"> */}
      <div className={stepStyles.genderButtons}>
        <button className={stepStyles.genderButton} onClick={() => handleSelect('homem')}>
          <img className={stepStyles.genderImage} src={homemImg} alt="Ícone Homem" />
          {/* ANTES: <div className="linha-botao"> */}
          <div className={stepStyles.buttonTextContainer}>
            <span className={stepStyles.buttonText}>Masculino</span>
            <FaChevronRight className={stepStyles.arrowIcon} />
          </div>
        </button>
        <button className={stepStyles.genderButton} onClick={() => handleSelect('mulher')}>
          <img className={stepStyles.genderImage} src={mulherImg} alt="Ícone Mulher" />
          <div className={stepStyles.buttonTextContainer}>
            <span className={stepStyles.buttonText}>Feminino</span>
            <FaChevronRight className={stepStyles.arrowIcon} />
          </div>
        </button>
      </div>

      {/* ANTES: <div className="textoexp"> */}
      <div className={stepStyles.infoSection}>
        {/* ANTES: <div className="linhaexp"> */}
        <div className={stepStyles.infoTitleContainer}>
          <img className={stepStyles.infoGif} src={giftImg} alt="Animação de presente" />
          {/* ANTES: <h3 className="explicacao"> */}
          <h3 className={stepStyles.infoTitle}>A NutriFácil™ Acaba de Resolver o Seu Problema</h3>
        </div>
        {/* ANTES: <p className="explicacao2"> */}
        <p className={stepStyles.infoText}>
          Com o nosso plano de nutrição personalizado, você terá acesso a um cardápio adaptado, planejado por nutricionistas, para atender às suas necessidades e objetivos, tudo isso em menos de 5 minutos!
        </p>
      </div>

      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepGender;