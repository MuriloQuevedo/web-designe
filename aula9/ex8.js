const produto = {
    Nome: "Carne",
    Preco: 50, // Armazenando o preço como número
    Quantidade: 3,

    // Método para calcular o preço total
    calcularTotal: function(preco, quantidade) {
        return preco * quantidade; // Retorna o preço total
    }
};

// Chamando o método calcularTotal com as propriedades do objeto
const total = produto.calcularTotal(produto.Preco, produto.Quantidade);
console.log("O preço total é:", total, "reais");
