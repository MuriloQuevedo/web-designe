
const alunos = [
    { nome: "Murilo", idade: 18 },
    { nome: "Ana", idade: 19 },
    { nome: "Pedro", idade: 17 },
    { nome: "Maria", idade: 21 }
];

function alunosMaiores(alunos) {
    return alunos.filter(aluno => aluno.idade > 18); // Retorna alunos com idade maior que 18
}


const alunosMaiorIdade = alunosMaiores(alunos);


console.log("Alunos maiores de 18 anos:", alunosMaiorIdade);
