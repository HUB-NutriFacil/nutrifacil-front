import React from 'react';
import { FaChevronRight } from "react-icons/fa";

// 1. Importa os estilos comuns e os específicos desta etapa
import stepStyles from './styles/Step.module.css';
import styles from './styles/StepGender.module.css';

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
    <div className={styles.container}>
      {/* ANTES: <div className="divlogo"> */}
      <div className={styles.logoContainer}>
        <img className={stepStyles.logo} src={logo} alt="Logo Nutrifacil" />
      </div>

      {/* ANTES: <div id="divheadline"> */}
      <div className={styles.headline}>
        <h2 className={stepStyles.title}>PLANO DE NUTRIÇÃO PERSONALIZADO</h2>
        <h3 className={stepStyles.subtitle}>
          Segundo seus objetivos e metas de saúde, de acordo com seus dados e necessidades.
        </h3>
        {/* ✨ Elemento que estava faltando, adicionado de volta */}
        <h3 className={styles.tag}>Menos de 5 minutos</h3>
      </div>
      
      <ProgressBar currentStep={0} />

      <h2 className={stepStyles.title}>SELECIONE SEU GÊNERO</h2>
      
      {/* ANTES: <div id="divbotao"> */}
      <div className={styles.genderButtons}>
        <button className={styles.genderButton} onClick={() => handleSelect('homem')}>
          <img className={styles.genderImage} src={homemImg} alt="Ícone Homem" />
          {/* ANTES: <div className="linha-botao"> */}
          <div className={styles.buttonTextContainer}>
            <span className={styles.buttonText}>Masculino</span>
            <FaChevronRight className={styles.arrowIcon} />
          </div>
        </button>
        <button className={styles.genderButton} onClick={() => handleSelect('mulher')}>
          <img className={styles.genderImage} src={mulherImg} alt="Ícone Mulher" />
          <div className={styles.buttonTextContainer}>
            <span className={styles.buttonText}>Feminino</span>
            <FaChevronRight className={styles.arrowIcon} />
          </div>
        </button>
      </div>

      {/* ANTES: <div className="textoexp"> */}
      <div className={styles.infoSection}>
        {/* ANTES: <div className="linhaexp"> */}
        <div className={styles.infoTitleContainer}>
          <img className={styles.infoGif} src={giftImg} alt="Animação de presente" />
          {/* ANTES: <h3 className="explicacao"> */}
          <h3 className={styles.infoTitle}>A NutriFácil™ Acaba de Resolver o Seu Problema</h3>
        </div>
        {/* ANTES: <p className="explicacao2"> */}
        <p className={styles.infoText}>
          Com o nosso plano de nutrição personalizado, você terá acesso a um cardápio adaptado, planejado por nutricionistas, para atender às suas necessidades e objetivos, tudo isso em menos de 5 minutos!
        </p>
      </div>

      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepGender;