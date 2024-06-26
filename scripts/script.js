function menu() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const digitando = document.querySelector('[data-js="digitando"]');

const mensagens = ['Estudante de Ciência da Computação', 'Desenvolvedora Fullstack'];

let mensagemIndex = 0;
let caractereIndex = 0;
let mensagemAtual = '';
let caractereAtual = '';

const type = () => {
    if (mensagemIndex === mensagens.length) {
        mensagemIndex = 0;
    }

    mensagemAtual = mensagens[mensagemIndex];
    caractereAtual = mensagemAtual.slice(0, caractereIndex++);
    digitando.textContent = caractereAtual;

    if (caractereAtual.length === mensagemAtual.length) {
        mensagemIndex++;
        caractereIndex = 0;
    }
}

setInterval(type, 100)