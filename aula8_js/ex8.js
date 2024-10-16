function contarVogais(str) {
    const vogais = 'aeiou'; // Define as vogais a serem contadas
    let contador = 0; // Inicializa um contador

    // Loop que itera por cada caractere da string
    for (const char of str) {
        if (vogais.includes(char)) { // Verifica se o caractere é uma vogal
            contador++; // Incrementa o contador
        }
    }
    return contador; // Retorna a quantidade de vogais
}
console.log(contarVogais("exemplo")); // Exemplo de uso da função
