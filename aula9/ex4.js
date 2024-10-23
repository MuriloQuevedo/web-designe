const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function recebe(numeros) {
    return numeros.filter(num => num % 2 !== 0) // Filtra e retorna apenas os ímpares
}

const resultado = recebe(numeros)
console.log("Os números ímpares são:", resultado)
