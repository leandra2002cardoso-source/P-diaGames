// Verifica se é uma crítica, menu ou um resumo para decidir onde abrir
function mostrarInfo(nomeJogo, descricaoDetalhada) {
    
    // Se o texto incluir "Avaliações", "Jogos Disponíveis" ou "Sobre o PédiaGames", abre a janela modal
    if (nomeJogo.includes('Avaliações') || nomeJogo === 'Jogos Disponíveis' || nomeJogo === 'Sobre o PédiaGames') {
        const modal = document.getElementById('modalWiki');
        const titulo = document.getElementById('tituloModal');
        const texto = document.getElementById('textoModal');

        titulo.innerText = nomeJogo;
        texto.innerText = descricaoDetalhada;
        modal.style.display = "flex";
    } 
    // Se não for nenhum dos três acima, é o resumo do jogo: salva e abre a página nova
    else {
        localStorage.setItem('tituloJogo', nomeJogo);
        localStorage.setItem('resumoJogo', descricaoDetalhada);
        window.open('resumo.html', '_blank');
    }
}

// Fecha a janela modal
function fecharModal() {
    const modal = document.getElementById('modalWiki');
    if (modal) {
        modal.style.display = "none";
    }
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