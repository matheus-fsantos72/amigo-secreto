
let amigos = [];

function limparCampo() {
    let nomeEscolhido = document.querySelector('input');
    nomeEscolhido.value = '';
}

function adicionarNome() {
    let nomeEscolhido = document.getElementById('amigo').value;

    if (nomeEscolhido == '') {
        alert('Por favor, insira um nome!');
        return;
    } else {
        amigos.push(nomeEscolhido);
        document.getElementById('amigo').value = '';
        exibirAmigos();

    }

}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigos()
{
       if (amigos.length === 0) {
        alert('Lista está vazia!');
    } else {
        let nomeEscolhido = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[nomeEscolhido];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        let item = document.createElement("li");
        item.textContent = `🎉 O nome sorteado foi: ${sorteado}`;
        resultado.appendChild(item);
}
}
