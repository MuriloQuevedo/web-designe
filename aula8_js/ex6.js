function dobro(numero) {
    // Verifica se o número é maior que zero
    if (numero > 0) {
        return numero * 2; // Retorna o dobro do número
    } else {
        return "Só é aceito números positivos maiores que zero"; // Mensagem de erro para números não positivos
    }
}
console.log(dobro(5)); // Exemplo de uso da função
