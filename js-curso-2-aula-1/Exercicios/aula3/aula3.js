let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

let media = calculaMedia(nota1, nota2, nota3, nota4);
verificarAprovacao(media);

function calculaMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

function verificarAprovacao(media) {
    return media >= 5 ? console.log('Aprovado') : console.log('Reprovado');
}

let numero = 3

tabuada(numero);

function tabuada (num) {
    for(let i = 1; i < 11; i++ ){
        let resultado = num * i;
        console.log(`${num} * ${i} = ${resultado}`);
    }
}