
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function alerta() {
    alert('Eu amo js');
}

function exibirPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function exibirMsgConsole() {
    console.log('O botão foi clicado');
}

function exibirSoma(){
    let num1 = parseInt(prompt('Informe o primeiro número'));
    let num2 = parseInt(prompt('Informe o segundo número'));
    let resultado = num1 + num2;
    alert(`O resultado é ${num1} + ${num2} = ${resultado}`);
}