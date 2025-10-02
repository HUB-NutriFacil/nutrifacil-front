import React, { useState, useRef } from "react";
// Assumindo que essa função foi movida para o paymentService
import { createPaymentPreference } from "../../services/paymentService"; 
import { formatWhatsapp } from "../../../../utils/formatters";
import { isValidWhatsapp } from "../../../../utils/validators";
import StepNavigation from "../common/StepNavigation"; 

import styles from './styles/Step.module.css'; // ✨ Crie este arquivo CSS!

function StepWpp({ nextStep, prevStep, userData, handleChange }) {
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const rawNumbers = e.target.value.replace(/\D/g, "");
        handleChange("celular", rawNumbers);
    };

    const handleContinuar = async () => {
        setLoading(true);
        try {
            // A chamada de API correta aqui é para criar a preferência de pagamento
            await createPaymentPreference(userData); 
            nextStep();
        } catch (error) {
            console.error("Erro ao criar preferência de pagamento:", error);
            alert("Não foi possível continuar. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        // ✨ Usando as classes do nosso CSS Module
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                {/* Aqui seria ideal importar o logo como fizemos antes */}
                <img className={styles.logo} src="/imagens/logogrande.svg" alt="Logo" />
            </div>

            <h2 className={styles.title}>Qual seu WhatsApp?</h2>
            <p className={styles.subtitle}>
                Digite seu número para receber o plano nutricional personalizado.
            </p>

            <input
                ref={inputRef}
                className={styles.input}
                type="tel"
                placeholder="(99) 99999-9999"
                value={formatWhatsapp(userData.celular)}
                onChange={handleInputChange}
                autoComplete="tel"
            />
            
            {/* ✨ Usando o StepNavigation com o texto customizado e lógica de loading */}
            <StepNavigation 
                onPrev={prevStep}
                onNext={handleContinuar}
                isNextDisabled={!isValidWhatsapp(userData.celular) || loading}
                nextText={loading ? "Enviando..." : "Continuar"}
            />

            <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
        </div>
    );
}

export default StepWpp;
