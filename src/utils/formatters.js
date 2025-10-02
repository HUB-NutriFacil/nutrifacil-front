// Função para formatar números de WhatsApp
export function formatWhatsapp(numbers) {
    if (!numbers) return "";
    numbers = numbers.replace(/\D/g, "").slice(0, 11); // Garante que temos apenas números
    
    if (numbers.length === 0) return "";
    if (numbers.length < 3) {
        return `(${numbers}`;
    } else if (numbers.length < 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
}