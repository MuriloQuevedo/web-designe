function alterarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = titulo.textContent === "Meu Título"
        ? "Título Alterado"
        : "Meu Título";
}

function alterarParagrafo() {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.style.color = paragrafo.style.color === "gray"
        ? "blue"
        : "gray";
}
function tocarAudio() {
    const audio = new Audio("Die.wav"); 
    audio.play();
}

function alterarBotoes() {
    const botao2 = document.getElementById("botao2");
    const botao3 = document.getElementById("botao3");
    

    // Toggle classes
    botao2.classList.toggle("active");
    botao3.classList.toggle("active");


}
function trocarImagem() {
    const imagem = document.getElementById("imagem");
    imagem.src = imagem.src.endsWith("random=1") ? "https://picsum.photos/200/200?random=2" : "https://picsum.photos/200/200?random=1";
}