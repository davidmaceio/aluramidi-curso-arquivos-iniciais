function tocaSomPom () {
    document.querySelector ('#som_tecla_pom').play();
}

const listaDeTeclas = querySelectorAll ('.tecla');

// Enquanto (estrutura de repetição)
while () {
    listaDeTeclas[0].onclick = tocaSomPom;
}