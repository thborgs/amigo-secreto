//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {

// Pega o input:
let inputAmigo = document.getElementById('amigo'); // Obtém o elemento HTML do input
let nomeAmigo = inputAmigo.value.trim(); // Obtém o valor do input

    // Verifica se o input está vazio:
    if (nomeAmigo.length === 0) {
        alert("Adicione um nome válido");
        } else {
        // Adiciona o nome do amigo na array:
        amigos.push(nomeAmigo);
        inputAmigo.focus(); //Pra não sair da janela do input
        atualizarLista();

        console.log(amigos);
}
    
            
limparCampo();
}

function limparCampo() {
 inputAmigo = document.querySelector('input');
 inputAmigo.value = '';
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Adiciona o event listener para a tecla "Enter"
document.getElementById('amigo').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo(); // Chama a função adicionarAmigo
    }
});

function sortearAmigo(){
    if (amigos.length === 0) {
        alert ('Adicione um amigo antes de sortear');
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${sorteado}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
}


