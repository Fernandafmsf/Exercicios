//Elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida. Caso o numero não seja uma centena, exiba uma mensagem informando isso. 

const prompt = require("prompt-sync")();
const centena=Number(prompt("Informe uma centena: "));

if(centena<100||centena>=1000){
  console.log("Informe um numero entre 100 e 999");
}

const n1 = Math.floor(centena/100);

let n2 = centena%100;
n2=Math.floor(n2/10);

const n3 = centena%10;

console.log("Centena invertida: "+n3+n2+n1);