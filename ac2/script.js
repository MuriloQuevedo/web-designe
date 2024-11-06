function addCard(event) {
  event.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const cardContainer = document.getElementById('card-container');

  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-3';

  colDiv.innerHTML = `
      <div class="card mb-4">
        <img src="https://picsum.photos/150" class="card-img-top" alt="Imagem do Card">
        <div class="card-body text-center">
          <h5 class="card-title">${titulo}</h5>
          <button class="btn btn-danger" onclick="removeCard(this)">Apagar</button>
        </div>
      </div>
    `;

  cardContainer.appendChild(colDiv);

  document.getElementById('titulo').value = '';
}

function removeCard(button) {
  button.closest('.col-md-3').remove();
}

function removeAllCards() {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
}
