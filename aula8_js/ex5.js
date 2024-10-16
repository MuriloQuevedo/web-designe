let numeros = ''; // Inicializa uma string vazia para armazenar os números
// Loop que itera de 1 a 10
for (let i = 1; i <= 10; i++) {
    numeros += i; // Adiciona o número atual à string
    if (i < 10) {
        numeros += '-'; // Adiciona um traço após o número, exceto no último
    }
}
console.log(numeros); // Imprime a string com os números
