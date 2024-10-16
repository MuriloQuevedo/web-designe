function validarEmail(email) {
    // Regex que verifica se o e-mail tem um '@' e um ponto após ele
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // Retorna true se o e-mail for válido, false caso contrário
}
console.log(validarEmail("teste@facens.br")); // Exemplo de uso da função
