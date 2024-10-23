const numeros = [10, 20, 30, 40, 50];

function chamada(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

const resultado = chamada(numeros);
console.log("A soma de todos os números é:", resultado);
