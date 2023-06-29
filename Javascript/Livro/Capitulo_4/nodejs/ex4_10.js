//Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o numero maximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela; Considere as seguintes condições: a)cada parcela deve ser de, no mínimo,20,00;b)O numero máximo de parcelas permitido é 6. 

//EXERCICIO INTERESSANTE

const prompt = require("prompt-sync")();

const valorCompra = Number(prompt("Qual o valor total da compra?"));
const aux = Math.floor(valorCompra/20);
console.log(aux);
let parcelas;
if(aux==1){
  parcelas=1;
} else if(aux>=6){//mesmo que o valor auxiliar divida o valor da compra pelo valor minimo das parcelas e encontra uma quantidade de parcelas muito grande, será parcelado sempre em 6 vezes. 
  parcelas=6;
} else{
  parcelas=aux;
}
/* Operador ternario 
const parcelas= aux==1 ? 1: aux>=6 ? 6: aux
*/

const valorParcelas=valorCompra/parcelas;
console.log("Quantidade de parcelas: "+parcelas);
console.log("Valor das parcelas: "+valorParcelas);
