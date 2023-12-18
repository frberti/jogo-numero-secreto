
let listaDeNumerosSorteados = [];
let limiteDeNumeros = 100;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;
mensagenInicial();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagenInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limpaCampo();
    }
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);

    if (listaDeNumerosSorteados.length == limiteDeNumeros) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {        
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    mensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
