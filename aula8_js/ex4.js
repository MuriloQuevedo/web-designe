const nome = "Fabio Rodrigo Colombini"; // Nome completo
const partes = nome.toLowerCase().trim().split(' '); // Converte para minúsculas, remove espaços e separa em partes
const primeiro = partes[0]; // Primeiro nome
const ultimo = partes[partes.length - 1]; // Último nome
const email = `${primeiro}.${ultimo}@facens.br`; // Formata o e-mail
console.log(email); // Imprime o e-mail
