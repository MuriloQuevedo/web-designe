// Função para alterar o texto do título
function alterarTitulo() {
  // Obtém o elemento com o ID "titulo"
  const titulo = document.getElementById("titulo");

  // Verifica o conteúdo do título. Se for "Meu Título", altera para "Título Alterado" e vice-versa
  titulo.textContent =
    titulo.textContent === "Meu Título" ? "Título Alterado" : "Meu Título";
}

// Função para alterar a cor do parágrafo
function alterarParagrafo() {
  // Obtém o elemento com o ID "paragrafo"
  const paragrafo = document.getElementById("paragrafo");

  // Verifica a cor do parágrafo. Se for "gray", altera para "blue" e vice-versa
  paragrafo.style.color = paragrafo.style.color === "gray" ? "blue" : "gray";
}

// Função para tocar um áudio
function tocarAudio() {
  // Cria um novo objeto de áudio com o arquivo "Die.wav"
  const audio = new Audio("Die.wav");

  // Inicia a reprodução do áudio
  audio.play();
}

// Função para alternar classes dos botões 2 e 3
function alterarBotoes() {
  // Obtém os elementos com os IDs "botao2" e "botao3"
  const botao2 = document.getElementById("botao2");
  const botao3 = document.getElementById("botao3");

  // O método toggle é usado para adicionar ou remover uma classe CSS de um elemento de forma alternada.
  // Se o elemento já possui a classe, toggle a remove; se o elemento não possui a classe, toggle a adiciona.
  // Isso permite alternar entre dois estados (ativo/inativo, visível/invisível, etc.) de forma prática.
  botao2.classList.toggle("active");
  botao3.classList.toggle("active");
}

// Função para trocar a imagem
function trocarImagem() {
  // Obtém o elemento com o ID "imagem"
  const imagem = document.getElementById("imagem");

  // Verifica o final do URL da imagem atual. Se termina com "random=1", altera para "random=2" e vice-versa
  imagem.src = imagem.src.endsWith("random=1")
    ? "https://picsum.photos/200/200?random=2"
    : "https://picsum.photos/200/200?random=1";
}
