# alugames
<h1 align="center"> Projeto AluGames </h1>

<h2 align="center"> Primeira aula: Função alterarStatus </h2>

Na primeira aula, criamos uma função chamada alterarStatus que permite ao usuário clicar nos botões de "alugar" ou "devolver" jogos. Para testar se a função está sendo acionada corretamente, adicionamos um alerta que exibe o nome do jogo clicado.

**Código:**

```function alterarStatus(id) {```
```let gameAlugado = document.getElementById(`game-${id}`);```
```let imagem = gameAlugado.querySelector('.dashboard__item__img');```
```let botao = gameAlugado.querySelector('.dashboard__item__button');```
```let nomeJogo = gameAlugado.querySelector('.dashboard__item__name');```

```alert(nomeJogo.textContent);}```

**Explicando o código:**

1. Definindo a função alterarStatus(id):

A função alterarStatus é chamada com um argumento id, que corresponde ao identificador único de cada jogo na interface.

2. Criando as variáveis:

gameAlugado: Usamos o método document.getElementById() para selecionar o elemento que contém as informações do jogo. A sintaxe de crase (`) e a interpolação de string (${id}) permitem que o ID do jogo seja dinâmico, ou seja, depende do jogo clicado.

imagem: Utilizamos gameAlugado.querySelector('.dashboard__item__img') para selecionar o elemento que representa a imagem do jogo dentro do container gameAlugado.

botao: Similarmente, a variável botao usa gameAlugado.querySelector('.dashboard__item__button') para selecionar o botão que será clicado para alterar o status do jogo.

nomeJogo: Usamos gameAlugado.querySelector('.dashboard__item__name') para obter o nome do jogo, que é armazenado no conteúdo de texto do elemento.

3. Exibindo o nome do jogo:

O alert(nomeJogo.textContent) exibe um alerta com o nome do jogo (extraído da propriedade textContent do elemento nomeJogo).

**Conclusão:**

Neste exercício, criamos uma função simples para capturar o nome de um jogo clicado a partir de um identificador dinâmico. O alerta serve para verificar se estamos capturando o nome corretamente. Essa abordagem é fundamental para interagir com os elementos da interface e realizar ações, como alterar o status de aluguel de jogos, com base na interação do usuário.

<h2 align="center"> Segunda aula: Alterar status do jogo clicado </h2>

Na segunda aula, fizemos algumas mudanças no código para melhorar sua estrutura e funcionalidade. Removemos o alert e a variável nomeJogo, pois eles não eram necessários. Além disso, incorporamos a lógica de verificação de condições diretamente na função alterarStatus(id), tornando o código mais simples e eficiente.

**Explicação do Código:**

O código abaixo manipula classes de elementos HTML para controlar o estado de um jogo (se está alugado ou não) e altera o conteúdo do botão de acordo com essa condição.

```if (imagem.classList.contains('dashboard__item__img--rented')) {```

```imagem.classList.remove('dashboard__item__img--rented'); // imagem me da sua lista de classe e remova essa classe 'dashboard__item__img--rented'```

```botao.classList.remove('dashboard__item__button--return') // botao me da sua lista de classe e remova essa classe 'dashboard__item__button--return'```

```botao.textContent = 'Alugar';```

```} else {```

```imagem.classList.add('dashboard__item__img--rented'); // imagem me da sua lista de classe e adicione essa classe 'dashboard__item__img--rented'```

```botao.textContent = 'Devolver';```

```botao.classList.add('dashboard__item__button--return') // botao me da sua lista de classe e adicione essa classe 'dashboard__item__button--return'}```

**Explicando as funções:**

* imagem.classList.contains('dashboard__item__img--rented'): Verifica se a imagem do item contém a classe 'dashboard__item__img--rented', indicando que o item está alugado.

* imagem.classList.remove('dashboard__item__img--rented'): Se o item estiver alugado, a classe 'dashboard__item__img--rented' é removida, marcando o item como disponível para aluguel.

* imagem.classList.add('dashboard__item__img--rented'): Se o item não estiver alugado, a classe 'dashboard__item__img--rented' é adicionada, indicando que ele foi alugado.

* botao.classList.remove('dashboard__item__button--return'): Quando o item é devolvido, a classe de "devolução" do botão é removida.

* botao.classList.add('dashboard__item__button--return'): Quando o item é alugado, a classe de "devolução" é adicionada ao botão.

* botao.textContent = 'Alugar': Modifica o texto do botão para "Alugar" se o item foi devolvido.

* botao.textContent = 'Devolver': Modifica o texto do botão para "Devolver" se o item foi alugado.

**Conclusão:**

O código apresentado tem como objetivo alterar o estado de um item (como um jogo) entre as opções de "alugar" e "devolver". Ao utilizar a manipulação de classes e a alteração do texto do botão, o código garante que a interface do usuário seja atualizada de maneira clara e eficiente conforme o estado do item muda. A estrutura do código também foi simplificada ao mover a lógica condicional diretamente para dentro da função alterarStatus(id), melhorando a legibilidade e a manutenibilidade do código.

Essa abordagem ajuda a criar uma interação dinâmica e intuitiva para o usuário, permitindo que ele saiba claramente se o item está disponível para aluguel ou se precisa ser devolvido.

<h2 align="center"> Confirmação de devolução </h2>

Vamos adicionar uma confirmação de devolução antes que ela seja realmente concluída no projeto Alugames. Para isso, podemos usar o window.confirm(), que exibe uma caixa de diálogo de confirmação para o usuário. Se o usuário confirmar, a devolução será feita, e se ele cancelar, a operação não será realizada.

A ideia é adicionar essa lógica dentro do bloco de código onde a devolução do item acontece.

**Passo a passo:**

1. Quando o item estiver alugado e o usuário clicar no botão de "Devolver", será exibida uma caixa de confirmação.

2. Se o usuário confirmar, o jogo será devolvido e o estado será atualizado (removendo a classe dashboard__item__img--rented e ajustando o botão).

3. Se o usuário cancelar, nada acontece e o estado do item permanece inalterado.

**Código atualizado:**

```if (imagem.classList.contains('dashboard__item__img--rented')) {```

```if (window.confirm('Você tem certeza que deseja devolver este jogo?')) {```

```imagem.classList.remove('dashboard__item__img--rented');```

```botao.classList.remove('dashboard__item__button--return');```

```botao.textContent = 'Alugar';```

```} else {```
```console.log('Devolução cancelada');}```

```} else {```
```imagem.classList.add('dashboard__item__img--rented');```

```botao.textContent = 'Devolver';```

```botao.classList.add('dashboard__item__button--return');```

**Explicação da modificação:**

* window.confirm(): Este método exibe uma caixa de diálogo simples com duas opções: "OK" e "Cancelar". Ele retorna true se o usuário clicar em "OK" e false se clicar em "Cancelar".

* Fluxo de confirmação:

* Quando o usuário tenta devolver o jogo (caso o item esteja alugado), a confirmação é acionada.

* Se o usuário confirmar (clicando em "OK"), o jogo será devolvido.

* Se o usuário cancelar (clicando em "Cancelar"), nada será feito e o estado do item permanecerá o mesmo.

**Conclusão:**

Agora, o sistema de aluguel de jogos no projeto Alugames tem uma proteção contra devoluções acidentais. Antes de devolver um jogo, o usuário será solicitado a confirmar sua ação, garantindo que ele tenha certeza do que está fazendo. Isso melhora a experiência do usuário e evita ações inesperadas.

<h2 align="center"> integrar a contagem de jogos alugados </h2>

 Vamos integrar a contagem de jogos alugados no console.log. A ideia é, sempre que o estado de um jogo mudar (alugado ou devolvido), atualizarmos a quantidade de jogos alugados e imprimir essa informação no console

 1. Criar um array para armazenar o estado dos jogos:

 Vamos criar um array para armazenar os jogos e seus estados de aluguel. Toda vez que um jogo for alugado ou devolvido, vamos atualizar esse array.

 2. Atualizar a função alterarStatus(id):

 A função alterarStatus(id) vai manipular tanto a interface do usuário quanto o estado do jogo no array.

 3. Criar a função contarJogosAlugados():

 A função contarJogosAlugados() vai contar quantos jogos estão alugados e imprimir esse número no console.

```// Array de jogos - cada jogo tem um id e o status de aluguel```
```const jogos = [```
```{ id: 1, alugado: false },```
```{ id: 2, alugado: false },```
```{ id: 3, alugado: false }];```

```// Função para alterar o estado de aluguel de um jogo```
```function alterarStatus(id) {```
```let gameAlugado = document.getElementById(`game-${id}`);```
```let imagem = gameAlugado.querySelector('.dashboard__item__img');```
```let botao = gameAlugado.querySelector('.dashboard__item__button');```

```// Encontrar o jogo no array```
```const jogo = jogos.find(jogo => jogo.id === id);```

```// Se o jogo está alugado (tem a classe 'dashboard__item__img--rented')```
```if (imagem.classList.contains('dashboard__item__img--rented')) {```

```// Confirmar se o usuário quer devolver o jogo```
```if (window.confirm('Você tem certeza que deseja devolver este jogo?')) {```
```// Se o usuário confirmar```
```imagem.classList.remove('dashboard__item__img--rented');```
```botao.classList.remove('dashboard__item__button--return');```
```botao.textContent = 'Alugar';```

```// Atualiza o estado do jogo no array para 'não alugado'```
```jogo.alugado = false;```
      
```console.log('Devolução realizada com sucesso');```
```} else {```
```// Se o usuário cancelar a devolução```
```console.log('Devolução cancelada');}```

```} else {```
```// Se o jogo não está alugado, realiza a locação```
```imagem.classList.add('dashboard__item__img--rented');```
```botao.textContent = 'Devolver';```
```botao.classList.add('dashboard__item__button--return');```

```// Atualiza o estado do jogo no array para 'alugado'```
```jogo.alugado = true;```

```console.log('Jogo alugado com sucesso');}```

```// Chama a função para contar e imprimir o número de jogos alugados```
```contarJogosAlugados();}```

```// Função para contar e imprimir o número de jogos alugados```
```function contarJogosAlugados() {```
```// Filtra os jogos que estão alugados```
```const jogosAlugados = jogos.filter(jogo => jogo.alugado);```

```// Imprime a quantidade de jogos alugados no console```
```console.log(`Número de jogos alugados: ${jogosAlugados.length}`);}```

**Explicação das Modificações:**

* Array jogos: Criamos um array chamado jogos, que contém objetos representando os jogos. Cada jogo tem um id e um campo alugado (um booleano indicando se o jogo está alugado ou não). O array armazena o estado de todos os jogos.

* Função alterarStatus(id):

* Alteração do estado do jogo: A função encontra o jogo pelo id no array jogos e altera o seu estado de alugado quando o jogo é alugado ou devolvido.

* Alteração da interface: A função manipula as classes da imagem e do botão, para refletir a mudança de estado (alugado ou devolvido) visualmente na interface.

* Confirmação de devolução: A caixa de confirmação é exibida quando o jogo está alugado e o usuário tenta devolvê-lo. Se o usuário confirmar, a devolução é realizada; caso contrário, nada acontece.

* Função contarJogosAlugados():

* Esta função filtra os jogos no array que estão com o estado alugado = true e imprime o número de jogos alugados no console.

* A função é chamada após cada alteração no estado de um jogo, garantindo que o número de jogos alugados seja sempre atualizado.

**Como funciona:**

* Quando o usuário clica em "Alugar" ou "Devolver", a função alterarStatus(id) é chamada.

* A função altera o estado do jogo no array jogos (modificando o campo alugado).

* Após a alteração, a função contarJogosAlugados() é chamada para contar quantos jogos estão alugados e imprimir esse número no console.

**Conclusão:**

Agora, a função alterarStatus(id) altera o estado do jogo e a interface do usuário, e a função contarJogosAlugados() garante que o número de jogos alugados seja sempre atualizado e impresso no console.

**Desafio:**

1. Crie um programa que verifica se uma palavra ou frase é um palíndromo.

```function verificarPalindromo(str) {```
```// Remove todos os caracteres não alfanuméricos e converte para minúsculas```
```const textoLimpo = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();```
    
```// Compara o texto limpo com o seu reverso```
```const textoInvertido = textoLimpo.split('').reverse().join('');```
    
```return textoLimpo === textoInvertido;}```

```// Exemplos de uso:```
```console.log(verificarPalindromo("A man, a plan, a canal, Panama")); // true```
```console.log(verificarPalindromo("Hello, world!")); // false```
```console.log(verificarPalindromo("Ana")); // true```

**Explicação:**

1. Remoção de caracteres não alfanuméricos: Usamos a expressão regular /[^a-zA-Z0-9]/g para remover espaços, pontuação e outros caracteres especiais.

2. Conversão para minúsculas: A função toLowerCase() é usada para garantir que a comparação seja feita sem levar em conta maiúsculas e minúsculas.

3. Comparação com o reverso: A string limpa é invertida usando split('').reverse().join(''), e a comparação é feita entre a string original limpa e o seu reverso.

**Exemplos:**

* "A man, a plan, a canal, Panama": é um palíndromo, portanto o retorno será true.

* "Hello, world!": não é um palíndromo, então o retorno será false.

**Desafio:**

1. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

```function ordenarNumeros(num1, num2, num3) {```
```// Cria um array com os três números```
```let numeros = [num1, num2, num3];```
    
```// Ordena o array em ordem crescente```
```numeros.sort((a, b) => a - b);```
    
```// Retorna o array ordenado```
```return numeros;}```

```// Teste da função```
```let num1 = 7;```
```let num2 = 3;```
```let num3 = 5;```

```let numerosOrdenados = ordenarNumeros(num1, num2, num3);```
```console.log("Números em ordem crescente:", numerosOrdenados);```

**Explicação:**

* A função ordenarNumeros recebe três números como parâmetros.

* Os números são colocados dentro de um array e o método sort() é utilizado para ordená-los em ordem crescente. A função de comparação (a, b) => a - b é usada para garantir a ordenação numérica correta (por padrão, sort() ordena como strings)

* Depois de ordenados, os números são retornados e exibidos no console.

**Saída esperada:**

```Números em ordem crescente: [3, 5, 7]```
