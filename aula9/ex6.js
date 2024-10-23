const aluno = {
    "nome": "Murilo",
    "idade": 18,
    "curso": "Eng. Computação",
    "matrícula": 249309
};
for (let prop in aluno){
     // 'prop' representa a chave atual do objeto 'aluno'
    // Imprime o nome da propriedade (prop) e seu valor correspondente (aluno[prop])
    console.log(prop +" "+ aluno[prop])
}