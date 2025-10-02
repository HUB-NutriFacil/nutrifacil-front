import React, { useEffect, useRef } from "react";
import { createPreference } from "../../services/paymentService";
// A função de gerar o plano de dieta deve estar no quizService
import { generateDietPlan } from "../../services/quizService";

// SEU_PUBLIC_KEY do Mercado Pago deve vir de variáveis de ambiente (.env)
const MERCADO_PAGO_PUBLIC_KEY = 'APP_USR-486df697-f288-44e6-b23a-6ff1de540186';

function StepCheckout({ userData, prevStep }) {
  const brickController = useRef(null);

  useEffect(() => {
    let isComponentMounted = true;

    const initializeBrick = async () => {
      try {
        const preferenceId = await createPreference(userData);
        if (!isComponentMounted || !window.MercadoPago) return;

        const mp = new window.MercadoPago(MERCADO_PAGO_PUBLIC_KEY, { locale: 'pt-BR' });
        await mp.bricks().create("payment", "paymentBrick_container", {
          initialization: { preferenceId },
          callbacks: {
            onReady: () => console.log("Brick pronto!"),
            onError: (error) => console.error("Erro no Brick:", error),
            onSubmit: async ({ formData }) => {
                // Aqui você pode enviar os dados do formulário de pagamento
                // para seu backend antes de finalizar o pagamento
                console.log("Dados do formulário:", formData);
            },
          },
        });
      } catch (error) {
        console.error("Falha ao inicializar o pagamento:", error);
        alert("Não foi possível carregar as opções de pagamento. Tente recarregar a página.");
      }
    };

    // Lógica para carregar o script do Mercado Pago se ele não existir
    if (!window.MercadoPago) {
      const script = document.createElement('script');
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;
      script.onload = initializeBrick;
      document.body.appendChild(script);
    } else {
      initializeBrick();
    }

    // Função de limpeza
    return () => {
      isComponentMounted = false;
      // Lógica para destruir o brick do MP quando o componente desmontar
      if (brickController.current && brickController.current.unmount) {
        brickController.current.unmount();
      }
    };
  }, [userData]); // O useEffect depende do userData para criar a preferência

  // Função para enviar os dados para gerar a dieta (pós-pagamento)
  // Esta função seria chamada no callback `onSuccess` ou `onSubmit` do Brick,
  // ou por um webhook do Mercado Pago no seu backend.
  // Colocar um botão "Enviar" manual pode não ser o fluxo ideal.
  const handleGeneratePlan = async () => {
      try {
          await generateDietPlan(userData);
          alert('Plano de dieta gerado com sucesso!');
          // Redirecionar para página de sucesso
      } catch (error) {
          alert('Erro ao gerar o plano de dieta.');
      }
  };

  return (
    <div className="divquestion2">
      <div className="divlogocentral">
        <img className="logo" src="/imagens/logogrande.svg" alt="Logo" />
      </div>
      <h2 className="Titulo">Finalize seu Pagamento</h2>
      <div id="paymentBrick_container">Carregando opções de pagamento...</div>
      
      {/* O ideal é que o próprio Brick do Mercado Pago gerencie o fluxo
          e seu backend confirme o pagamento via webhook.
          Este botão "Enviar" pode ser redundante. */}

      <StepNavigation onPrev={prevStep} />
      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepCheckout;