/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;  //todas as vareaveis var são carregadas antes do código ser executado, por tanto podem ser declaradas depois de serem usadas.


//let
let altura = 5;
let comprimento = 7;
let forma = 'retângulo'
let area;

if (forma === 'retângulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area)

//const
const forma = 'triangulo'
const altura = 5;
const comprimento = 7;
const area;

if (forma === 'quadrado'){
    area = altura * comprimento
} else {
    area = (altura * comprimento) /2
}

console.log(area)*/


//conversão implicida
const numeroInt = 456;
const numeroString = "456";
console.log(numeroInt == numeroString)
console.log(numeroInt === numeroString)
console.log(numeroInt + numeroString)
console.log(numeroInt + Number(numeroString))


