// Idealmente, a URL base viria de uma variável de ambiente
const API_URL = 'https://nutrifacil-back.azurewebsites.net/api/payments';

export const createPreference = async (userData) => {
  const response = await fetch(`${API_URL}/create_preference`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Envia os dados do usuário para que o backend possa criar uma preferência com valor correto, etc.
    body: JSON.stringify({ celular: userData.celular, objetivo: userData.objetivo }), 
  });
  if (!response.ok) {
    throw new Error('Falha ao criar preferência de pagamento');
  }
  const data = await response.json();
  return data.preferenceId;
};