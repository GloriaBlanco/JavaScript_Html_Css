//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let AmigosIncluidos = [];
let nomesSorteados = [];
let j = 0;

function adicionarAmigo() { // este nome da função está no arquiv input  no html
    // pega o nome do amigo digitado no input no html
    let nome = document.getElementById("amigo").value;
    // verifica se o nome é válido    
    if (!nome) {
        alert('Por favor, insira um nome válido');
        console.log(nome);
        return;
    }
    // verifica se o nome já esta na lista lista incluirAmigos
    if (AmigosIncluidos.includes(nome)){
        alert('Este nome já foi adicionado.Por favor digite outro nome.');
        console.log(nome);
        document.getElementById("amigo").value = "";
        document.getElementById("amigo").focus();
        return;
    }
    // adiciona o nome na lista lista_amigos
    AmigosIncluidos.push(nome);
    console.log(nome);
    console.log(AmigosIncluidos);
    // limpa o campo de input // coloca o foco no campo de input
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
    atualizarListaAmigos(); // atualiza a lista de amigos
}

// função para mostrar os nomes digitados na lista na tela para o usuário 
function atualizarListaAmigos() {
    j = AmigosIncluidos.length;
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < AmigosIncluidos.length; i++){         
       let elemento = document.createElement("li");
       elemento.textContent = AmigosIncluidos[i];
       listaAmigos.appendChild(elemento);
    }
}


// esta funcao sorteia um amigo para o usuario, e mostra na tela
function sortearAmigo() { // este nome da funçaõ é o mesmo que esta no botão no html
    if (AmigosIncluidos.length < 2 && j < 2) {
        alert('Por favor, adicione pelo menos dois amigos para sortear.');
        return;
    }
    let amigoSorteado = AmigosIncluidos[Math.floor(Math.random() * AmigosIncluidos.length)];
    console.log(amigoSorteado);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}`;
    // Adiciona o amigo sorteado à lista de nomes sorteados
    nomesSorteados.push(amigoSorteado);

    // excluir o  nome sorteado da lista de AmigosIncluidos
    AmigosIncluidos.splice(AmigosIncluidos.indexOf(amigoSorteado), 1);

    if (nomesSorteados.length === j-1) {
        alert(`Acabou sorteio, sobrou o nome ${AmigosIncluidos[0]}. Por favor, começe novamente. `);
        return;
    }
    // atualiza a lista de amigos    console.log(AmigosIncluidos);
    console.log(nomesSorteados);
    atualizarListaAmigosSorteados();
}


function atualizarListaAmigosSorteados() {
    let listasorteados= document.getElementById("Sorteados");
    listasorteados.innerHTML = "";
    for (let i = 0; i < nomesSorteados.length; i++){
        console.log(j);      
       let elementoSorteado = document.createElement("li");
       elementoSorteado.textContent = nomesSorteados[i];
       listasorteados.appendChild(elementoSorteado);
    }
    console.log(nomesSorteados);
    console.log(j)
}


