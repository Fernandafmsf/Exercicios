//Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionario trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionario tem direito e o salario final 

const prompt = require("prompt-sync")()
const salario = Number(prompt("Qual seu salário?"));
const tempo = Number(prompt("A quantos anos você está na empresa?"));

const quadrienio = Math.floor(tempo/4);
const taxaAumentoSalarial = quadrienio*1;
const aumento = salario+ ((salario*taxaAumentoSalarial)/100); // divide por 100 porque a taxa é 1%
console.log("######################")
console.log(`Salário ${salario}`);
console.log(`Tempo (anos) ${tempo}`);
console.log(`Quadriênio ${quadrienio}`);
console.log(`Salário final ${aumento.toFixed(2)}`);
console.log("######################");
