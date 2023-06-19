//Elaborar um programa para uma veterinária que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração em gramas 

const prompt = require("prompt-sync")()
const pesoRacao = Number(prompt("Informe o peso da ração em KG: "));
const consumoDiario = Number(prompt("Informe o consumo diário de ração em gramas: "));

const duracao = Math.floor((pesoRacao*1000)/consumoDiario);
const sobra = (pesoRacao * 1000) % consumoDiario;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gr`);