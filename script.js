1  // Seleciona todos os elementos <button> da página e os guarda na constante 'botoes' como uma lista
2  const botoes = document.querySelectorAll("button");
3  
4  // Passa por cada botão da lista (um por um) para aplicar as regras abaixo
5  botoes.forEach(function (botao) {
6  
7      // Cria uma variável interna para controlar se O BOTÃO ATUAL foi clicado ou não (começa como falso)
8      let curtiu = false;
9  
10     // Adiciona um "escutador" que aguarda o clique especificamente neste botão
11     botao.addEventListener("click", botaoClicado);
12 
13     // Define a função que roda toda vez que este botão específico recebe um clique
14     function botaoClicado() {
15         // Exibe uma mensagem no console do navegador apenas para testar se o clique funcionou
16         console.log("fui clicado");
17 
18         // Procura e seleciona a tag <span> (o número do contador) que está dentro deste botão
19         let texto = botao.querySelector("span");
20 
21         // Se o usuário ainda não tiver clicado neste botão (curtiu é igual a false)
22         if (curtiu === false) {
23             texto.textContent++;   // Soma +1 ao número atual do contador
24             curtiu = true;          // Muda o status para true (indicando que agora está "curtido")
25 
26         // Caso o usuário clique novamente (ou seja, curtiu já era true)
27         } else {
28             texto.textContent--;   // Subtrai -1 do número do contador (desfaz a curtida)
29             curtiu = false;         // Volta o status para false (permitindo curtir de novo depois)
30         }
31     }
32 });
33 
