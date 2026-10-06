// Abre a janela modal com o resumo do jogo
function mostrarInfo(nomeJogo, descricaoDetalhada) {
    const modal = document.getElementById('modalWiki');
    const titulo = document.getElementById('tituloModal');
    const texto = document.getElementById('textoModal');

    titulo.innerText = "Resumo: " + nomeJogo;
    texto.innerText = descricaoDetalhada;
    modal.style.display = "flex";
}

// Fecha a janela modal
function fecharModal() {
    const modal = document.getElementById('modalWiki');
    modal.style.display = "none";
}

// Pesquisa simples por texto
function filtrarJogos() {
    let input = document.getElementById('pesquisa').value.toLowerCase();
    let cards = document.getElementsByClassName('card-jogo');

    for (let i = 0; i < cards.length; i++) {
        let tituloCard = cards[i].getElementsByTagName('h4')[0].innerText.toLowerCase();

        if (tituloCard.includes(input)) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}
