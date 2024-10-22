// 1. Variáveis
let nome = "João";  // let: usada para variáveis que podem ser reatribuídas, mas dentro do mesmo bloco
const idade = 25;   // const: usada para valores que não podem ser reatribuídos (imutáveis)
var cidade = "São Paulo"; // var: uma forma mais antiga, com escopo de função, não recomendada para novos códigos

// 2. Tipos de variáveis
let numero = 30;    // number: números inteiros ou decimais
let texto = "Olá!"; // string: sequência de caracteres
let booleano = true; // boolean: verdadeiro ou falso
let frutas = ["maçã", "banana", "laranja"]; // array: coleção de dados
let pessoa = {nome: "Carlos", idade: 30}; // object: conjunto de chave-valor
let valorIndefinido; // undefined: variável declarada, mas sem valor atribuído
let vazio = null;   // null: valor intencionalmente vazio

// 3. Console.log
console.log("Nome:", nome);  // imprime o valor da variável nome
console.log("Idade:", idade); // imprime o valor da variável idade

// 4. Operadores de Atribuição e Comparação
let x = 5;         // Atribui o valor 5 a x
x += 2;            // Atribui x + 2, ou seja, 7
console.log(x);    // Imprime 7
console.log(x == 7);   // Verifica se x é igual a 7 (true)
console.log(x === "7"); // Verifica se x é estritamente igual a "7" (false, pois o tipo é diferente)

// 5. Funções
function saudacao(nome) {     // Função com parâmetro e sem retorno
  console.log("Olá, " + nome);
}
saudacao("Maria");            // Chama a função e imprime "Olá, Maria"

function soma(a, b) {         // Função com parâmetros e retorno
  return a + b;
}
let resultado = soma(10, 20); // Chama a função e atribui o resultado à variável
console.log("Soma:", resultado); // Imprime 30

// 6. Arrow Function
const multiplicar = (a, b) => a * b;  // Arrow function para multiplicação
console.log("Multiplicação:", multiplicar(5, 3)); // Imprime 15

// 7. Estruturas de Controle - Condicional (if/else)
if (idade >= 18) {
  console.log("Maior de idade"); // Executa se a condição for verdadeira
} else {
  console.log("Menor de idade");
}

// 8. Estruturas de Repetição - for
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]); // Percorre o array frutas e imprime cada item
}
