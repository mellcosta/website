// script.js

document.addEventListener('DOMContentLoaded', function() {
  var textoCurto = document.querySelector('.texto-curto');
  var textoLongo = document.querySelector('.texto-longo');
  var verMaisBtn = document.querySelector('.ver-mais');

  if (textoCurto.offsetHeight < textoCurto.scrollHeight) {
    verMaisBtn.style.display = 'block'; /* Exibe o botão apenas se houver conteúdo oculto */
  }

  verMaisBtn.addEventListener('click', function() {
    if (textoCurto.style.display === 'none') {
      textoCurto.style.display = 'block';
      textoLongo.style.display = 'none';
      this.textContent = 'Ver mais';
    } else {
      textoCurto.style.display = 'none';
      textoLongo.style.display = 'block';
      this.textContent = 'Ver menos';
    }
  });
});

