exibirTexto();

exibirNome('Francisco');

let dobro = devolveDobro(2);
console.log(dobro);

let media = devolveMedia(10, 4, 7);
console.log(media);

let maior = devolveMaiorNumero(14, 8);
console.log(maior);

let produto = devolveProduto(3);
console.log(produto);


function exibirTexto() {
    console.log('Olá mundo');
}

function exibirNome(nome) {
    console.log(`Olá ${nome}!`)
}

function devolveDobro(numero) {
    return numero * 2;
}

function devolveMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function devolveMaiorNumero(num1, num2) {    
    return num1 > num2 ? num1 : num2;
}

function devolveProduto(num1) {
    return num1 * num1;
}
