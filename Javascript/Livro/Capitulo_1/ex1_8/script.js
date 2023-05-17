//Elabore um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas

const dias = Number(prompt('Quantos dias durou sua viagem?'));
const horas = Number(prompt('Quantas horas durou sua viagem?')); 

const total = (dias*24) + horas;

alert(`A duração total da viagem em horas foi de: ${total}`);
