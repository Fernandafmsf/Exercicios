//Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exibir "Sem multa", se a velocidade fr até 20% maior, "Multa leve". Se a velocidade for maior que 20% da velocidade permitida, "Multa grave". 
const form = document.querySelector("form");
const resp=document.querySelector(".outResultado");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const velocidadePermitida=Number(form.inVelocidadePermitida.value);
  const VelocidadeCondutor=Number(form.inVelocidadeCondutor.value);

  const taxaVelocidade= (VelocidadeCondutor*100)/velocidadePermitida;

  const multa = taxaVelocidade<=100? `Situação: Sem multa`: taxaVelocidade<=120 ? `Situação: Multa leve`: ` Situação: Multa grave`;

  resp.innerText=multa;

})