// Função para validar números de WhatsApp
export function isValidWhatsapp(numbers) {
    if (!numbers) return false;
    numbers = numbers.replace(/\D/g, ""); // Remove tudo que não for dígito
    // Verifica se tem 11 dígitos e se o terceiro dígito é '9'
    return numbers.length === 11 && numbers[2] === "9";
}