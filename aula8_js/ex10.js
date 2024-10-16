function isPalindromo(str) {
    // Converte a string para minúsculas
    var cleaned = str.toLowerCase();
    
    // Inverte a string
    var reversed = '';
    for (var i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }
    
    // Compara a string original com a invertida
    return cleaned === reversed;
}

console.log(isPalindromo("arara")); // Exemplo de uso da função
