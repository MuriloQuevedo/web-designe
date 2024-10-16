function validarEmail(email) {
    // Verifica se o e-mail contém o símbolo '@'
    if (email.indexOf('@') === -1) {
        return false; // Retorna falso se não houver '@'
    }

    // Verifica se há um ponto após o '@'
    const posAt = email.indexOf('@');
    const posPonto = email.indexOf('.', posAt);

    if (posPonto === -1) {
        return false; // Retorna falso se não houver ponto após o '@'
    }
    return true; // Retorna verdadeiro se todas as verificações passarem
}

console.log(validarEmail("teste@facens.br")); // Exemplo de uso da função
