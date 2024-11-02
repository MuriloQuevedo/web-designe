// Obtém o elemento do display para atualizar os valores
const display = document.getElementById("display");

// Captura todos os botões com a classe 'btn' e os coloca em um array
const buttons = Array.from(document.getElementsByClassName("btn"));

// Variável que armazena a entrada atual do usuário
let currentInput = '';

// Adiciona um evento de clique para cada botão
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent; // Obtém o valor do botão clicado

        // Se o botão for '=', realiza o cálculo
        if (value === "=") {
            try {
                // Usa a função eval para calcular a expressão e converte o resultado em string
                currentInput = eval(currentInput).toString();
            } catch {
                // Se houver erro no cálculo, exibe "Erro"
                currentInput = "Erro";
            }
        } else {
            // Caso contrário, adiciona o valor do botão à entrada atual
            currentInput += value;
        }
        
        // Atualiza o display com o valor atual ou '0' se estiver vazio
        display.textContent = currentInput || "0";
    });
});
