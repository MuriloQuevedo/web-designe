// Função para inserir números e operadores no display
function insert(num) {
    // Pega o conteúdo atual do display
    var numero = document.getElementById('display').innerHTML;
    // Adiciona o número ou operador pressionado ao conteúdo atual do display
    document.getElementById('display').innerHTML = numero + num;
}

// Função para limpar o display
function clean() {
    // Define o conteúdo do display como vazio
    document.getElementById('display').innerHTML = "";
}

// Função para apagar o último caractere do display
function back() {
    // Pega o conteúdo atual do display
    var resultado = document.getElementById('display').innerHTML;
    // Atualiza o conteúdo removendo o último caractere
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para calcular a expressão no display
function calcular() {
    // Pega o conteúdo atual do display
    var resultado = document.getElementById('display').innerHTML;
    // Verifica se o display não está vazio
    if (resultado) {
        // Usa a função eval para avaliar a expressão e mostra o resultado
        document.getElementById('display').innerHTML = eval(resultado);
    } else {
        // Exibe "ERROR" se o display estiver vazio
        document.getElementById('display').innerHTML = "ERROR";
    }
}
