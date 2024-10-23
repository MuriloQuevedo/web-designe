const endereco = {
    rua: "Av. Brasil",
    bairro: "Centro",
    numero: 123,
    cidade: "São Paulo"
};

for (let prop in endereco) {
    // Imprime o nome da propriedade (prop) e seu valor correspondente (endereco[prop])
    console.log(prop + ": " + endereco[prop]);
}
