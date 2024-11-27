function Card(event) {
  event.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const cardContainer = document.getElementById('cards');

  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-3';

  
  function imagemalaatoria() {
    const randomNum = Math.floor(Math.random() * 1000); 
    return `https://picsum.photos/150?random=${randomNum}`;
  }

  
  colDiv.innerHTML = `
  <div class="card mb-4">
    <img src="${imagemalaatoria()}" class="card-img-top" alt="Imagem do Card">
    <div class="card-body text-center">
      <h5 class="card-title">${titulo}</h5>
      <button class="btn btn-danger" onclick="remover()">Apagar</button>
    </div>
  </div>
`;

  cardContainer.appendChild(colDiv);


  document.getElementById('titulo').value = '';
}

function limpar(button) {
  button.closest('.col-md-3').remove();
}

function remover(button) {
  button.closest('.col-md-3').remove();
}

function limpar() {
  const cardContainer = document.getElementById('cards');
  cardContainer.innerHTML = '';
}
