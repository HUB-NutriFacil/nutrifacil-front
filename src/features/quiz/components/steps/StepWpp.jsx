import React, { useState, useRef } from "react";
import { enviarUserDataParaPagamento } from "../../services/quizService"; // Importa do service
import { formatWhatsapp } from "../../../../utils/formatters"; // Importa do utilitário
import { isValidWhatsapp } from "../../../../utils/validators"; // Importa do utilitário
import StepNavigation from "../common/StepNavigation";

function StepWpp({ nextStep, prevStep, userData, handleChange }) {
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const rawNumbers = e.target.value.replace(/\D/g, "");
        handleChange("celular", rawNumbers); // Salva o número puro no estado
    };

    const handleContinuar = async () => {
        setLoading(true);
        try {
            // Supondo que o envio para pagamento acontece aqui
            await enviarUserDataParaPagamento(userData); 
            nextStep();
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Não foi possível continuar. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="divquestion2">
            <div className="divlogocentral">
                <img className="logo" src="/imagens/logogrande.svg" alt="Logo" />
            </div>
            <h2 className="Titulo">Qual seu WhatsApp?</h2>
            <p className="Subtitulo2">
                Digite seu número para receber o plano nutricional personalizado.
            </p>
            <input
                ref={inputRef}
                className="placeholder"
                type="tel" // Usar type="tel" é mais semântico
                placeholder="(99) 99999-9999"
                value={formatWhatsapp(userData.celular)} // Formata o valor para exibição
                onChange={handleInputChange}
                autoComplete="tel"
            />
            {/* Podemos usar o StepNavigation aqui, mas com um texto customizado no botão */}
            <div className="botoesirevir">
                <button className="btnirevir" onClick={prevStep}>
                    Voltar
                </button>
                <button
                    className="btnirevir"
                    onClick={handleContinuar}
                    disabled={!isValidWhatsapp(userData.celular) || loading}
                >
                    {loading ? "Enviando..." : "Continuar"}
                </button>
            </div>
            <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
        </div>
    );
}

export default StepWpp;