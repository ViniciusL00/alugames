// Array de jogos - cada jogo tem um id e o status de aluguel
const jogos = [
    { id: 1, alugado: false },
    { id: 2, alugado: false },
    { id: 3, alugado: false }
  ];

// Função para alterar o estado de aluguel de um jogo  
function alterarStatus(id) {
   let gameAlugado = document.getElementById(`game-${id}`);
   let imagem = gameAlugado.querySelector('.dashboard__item__img');
   let botao = gameAlugado.querySelector('.dashboard__item__button');

 // Encontrar o jogo no array
 const jogo = jogos.find(jogo => jogo.id === id);

    // Se o jogo está alugado (tem a classe 'dashboard__item__img--rented')
   if (imagem.classList.contains('dashboard__item__img--rented')) {

    if (window.confirm('Você tem certeza que deseja devolver este jogo?')) {
        // Confirmar se o usuário quer devolver o jogo

        imagem.classList.remove('dashboard__item__img--rented'); // Remove a classe que indica que o item foi alugado.
        botao.classList.remove('dashboard__item__button--return'); // Remove a classe que indica que o botão é para devolver.
        botao.textContent = 'Alugar'; // Altera o texto do botão para "Alugar".

    // Atualiza o estado do jogo no array para 'não alugado'
    jogo.alugado = false;
      
      console.log('Devolução realizada com sucesso');

      } else {
        // Se o usuário cancelar a ação, nada acontece
        console.log('Devolução cancelada');
      }

   } else {
  // Caso contrário, se o item não está alugado, realiza a locação normalmente
  imagem.classList.add('dashboard__item__img--rented'); // Adiciona a classe 'dashboard__item__img--rented', indicando que o item foi alugado.
  botao.textContent = 'Devolver'; // Altera o texto do botão para "Devolver".
  botao.classList.add('dashboard__item__button--return'); // Adiciona a classe que indica que o botão é para devolução.

  jogo.alugado = true;

  console.log('Jogo alugado com sucesso');
}

 // Chama a função para contar e imprimir o número de jogos alugados
 contarJogosAlugados();

}

// Função para contar e imprimir o número de jogos alugados
function contarJogosAlugados() {
    // Filtra os jogos que estão alugados
    const jogosAlugados = jogos.filter(jogo => jogo.alugado);
  
    // Imprime a quantidade de jogos alugados no console
    console.log(`Número de jogos alugados: ${jogosAlugados.length}`);
  }