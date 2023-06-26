
const prompt = require("prompt-sync")();
const bairro = prompt("Bairro de entrega: ");
let taxaEntrega;

switch(bairro){
  case "Centro":
    taxaEntrega=5.0;
    break
  case "Fragata":
  case "Tres Vendas":
    taxaEntrega=7.00
    break
  
  default:
    taxaEntrega=8.00;
}

console.log(taxaEntrega);


