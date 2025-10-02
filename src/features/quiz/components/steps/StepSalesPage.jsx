import React from "react";
// Importando nossas funções limpas!
import { calcularIMC } from "../../../../utils/calculations";
import { 
  getGifForObjective, 
  getTextForObjective, 
  getGifForDiet 
} from "../../utils/quizHelpers";
import StepNavigation from "../common/StepNavigation";
// import './StepSalesPage.css'; // ✨ Recomendado: Crie este arquivo de CSS

function StepSalesPage({ prevStep, nextStep, userData }) {
  // ✨ Simples e direto! Confiamos na prop que recebemos.
  const dados = userData; 

  const imc = calcularIMC(dados.peso, dados.altura);

  return (
    <div className="divfinalvenda">
      <div className="divlogocentral">
        <img className="logocentral" src="/imagens/logogrande.svg" alt="Logo" />
      </div>

      <h2 className="Titulo">Seu plano está pronto!</h2>

      {/* Seção de Resumo do Usuário */}
      <div className="user-summary">
        <img
          src={getGifForObjective(dados.objetivo)}
          alt="Gif representando o objetivo"
          className="objective-gif" // Mova estilos para CSS
        />
        <div>
          <h1>Para {getTextForObjective(dados.objetivo)}</h1>
        </div>
        <div className="grid2">
          <div className="imc">
            <p className="imcc"><strong>IMC</strong></p>
            <p className="vimc">{imc}</p>
          </div>
          <div className="dadosusuario">
            <p className="d1"><strong>Peso:</strong> {dados.peso || "N/A"} kg</p>
            <p className="d1"><strong>Altura:</strong> {dados.altura || "N/A"} cm</p>
            <p className="d1"><strong>Idade:</strong> {dados.idade || "N/A"} anos</p>
            <p className="d1"><strong>Dieta:</strong> {dados.dieta || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Seção do Produto */}
      <div className="produto">
        <img
          src={getGifForDiet(dados.dieta)}
          alt={`Gif da dieta ${dados.dieta}`}
          className="diet-gif" // Mova estilos para CSS
        />
        <div className="infoproduto">
          <h3 className="textinho">Plano Personalizado NutriFácil</h3>
          <p className="textinho"><strong>Preço:</strong> R$ 49.90</p>
          <p className="mes">Para mais de 1 mês</p>
        </div>
      </div>
      
      {/* Usando o componente de navegação para consistência */}
      <StepNavigation prevStep={prevStep} onNext={nextStep} />

      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepSalesPage;