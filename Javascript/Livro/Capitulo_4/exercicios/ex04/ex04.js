//Elaborar um programa que leia 3 dados e verifique se eles podem ou não formar um triângulo. Para formar um triangulo, um dos lados não pode ser maior que a soma dos outros dois. Se puder formar um, exiba também qual o tipo (equilatero - 3 lados iguais, isósceles - 2 lados, escaleno - todos os lados diferentes )

const form = document.querySelector("form");
const resp1=document.querySelector(".outResposta");
const resp2=document.querySelector(".outNomeTriangulo");

form.addEventListener("submit", (e)=>{
 
  const ladoA = Number(form.inLadoA.value);
  const ladoB=Number(form.inLadoB.value);
  const ladoC = Number(form.inLadoC.value);
  let tipoTriangulo;
 
  if(ladoA+ladoB>ladoC && ladoA+ladoC>ladoB && ladoB+ladoC>ladoA){
    resp1.innerText=`É um triangulo`;
  
      tipoTriangulo= ladoA == ladoB && ladoB == ladoC ? "Equilátero"
        :ladoA == ladoB && ladoB != ladoC ? "Isósceles": "Escaleno";
         resp2.innerText = `Tipo: ${tipoTriangulo}`;
  }else{
    resp1.innerText=`Não é um triângulo.`;
    resp2.innerText=``;
  }

   e.preventDefault();

 
 
})
