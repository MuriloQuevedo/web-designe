function isPalindromo(str) {
    // Remove caracteres não alfanuméricos e converte para minúsculas
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Compara a string limpa com sua versão invertida
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindromo("arara")); // Exemplo de uso da função
