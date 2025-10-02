// A URL base da sua API deve, idealmente, vir de uma variável de ambiente (.env)
const API_URL = 'https://nutrifacil-back.azurewebsites.net/api/payments';

/**
 * ✨ Renomeamos a função para ser mais específica sobre o que ela faz.
 * Esta função cria uma "preferência de pagamento" no backend.
 * @param {object} userData - Os dados do usuário coletados no quiz.
 * @returns {Promise<object>} O resultado da criação da preferência.
 */
export async function createPaymentPreference(userData) {
  try {
    const response = await fetch(`${API_URL}/create_preference`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    // Se a resposta da API não for bem-sucedida (ex: erro 400 ou 500)
    if (!response.ok) {
      // Lança um erro que pode ser capturado pelo componente que chamou a função
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const resultado = await response.json();
    return resultado;

  } catch (error) {
    // Apenas logar o erro aqui "esconde" o problema do resto da aplicação.
    // É uma prática melhor relançar o erro para que o componente (ex: StepWpp)
    // possa capturá-lo em seu próprio bloco try...catch e exibir um alerta para o usuário.
    console.error("Erro ao criar preferência de pagamento:", error);
    
    // ✨ O erro é relançado para ser tratado na interface.
    throw error;
  }
}