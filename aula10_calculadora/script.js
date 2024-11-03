// Função para inserir números e operadores no display
function insert(num) {
    // Pega o conteúdo atual do display usando .innerHTML para ler o valor
    var numero = document.getElementById('display').innerHTML;
    // Adiciona o número ou operador pressionado ao conteúdo atual do display
    // Atualizando o display com o novo conteúdo
    document.getElementById('display').innerHTML = numero + num;
}

// Função para limpar o display
function clean() {
    // Define o conteúdo do display como vazio usando .innerHTML
    document.getElementById('display').innerHTML = "";
}

// Função para apagar o último caractere do display
function back() {
    // Pega o conteúdo atual do display usando .innerHTML
    var resultado = document.getElementById('display').innerHTML;
    // Atualiza o conteúdo removendo o último caractere
    // Usa resultado.substring(0, resultado.length - 1) para extrair
    // a string desde o início (0) até o penúltimo caractere
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para calcular a expressão no display
function calcular() {
    // Pega o conteúdo atual do display usando .innerHTML
    var resultado = document.getElementById('display').innerHTML;
    // Verifica se o display não está vazio
    if (resultado) {
        // Usa a função eval para avaliar a expressão matemática digitada
        // e exibe o resultado no display
        document.getElementById('display').innerHTML = eval(resultado);
    } else {
        // Exibe "ERROR" se o display estiver vazio
        document.getElementById('display').innerHTML = "ERROR";
    }
}
