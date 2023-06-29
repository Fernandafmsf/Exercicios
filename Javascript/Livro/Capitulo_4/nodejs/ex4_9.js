// A entrada para um clube de pesca custa 20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam 12,00. Elabore um programa que leia o numero de pessoas de uma familia que foram ao clube e o número de peixes obtidos na pescaria.Informe o valor a pagar.

const prompt = require("prompt-sync")();

const numeroPessoas = Number(prompt("Quantas pessoas entraram no clube?"));
const numeroPeixes = Number(prompt("Quantos peixes foram obtidos?"));

const valorEntrada = 20 * numeroPessoas;
let valorPeixe = 0;
if (numeroPeixes > numeroPessoas) {
  valorPeixe = (numeroPeixes - numeroPessoas) * 12;
}
const valorTotal = valorEntrada + valorPeixe;
console.log("Deve ser pago: " + valorTotal.toFixed(2));

/* Outra forma de fazer. Utilizando menos variaveis e mais enxuto
let pagar;
if(numeroPeixes<=numeroPessoas){
  pagar=numeroPessoas*20;
}else{
  pagar= ((numeroPeixes-numeroPessoas)*12)+(numeroPessoas*20);
}

*/
