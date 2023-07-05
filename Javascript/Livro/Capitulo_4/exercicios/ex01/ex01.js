//Elaborar um programa que leia um número e diga se é impar ou par.Fazer primeiro com if e else e depois tentar com operador ternário.

const form = document.querySelector("form");
const resp = document.querySelector(".outResposta");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const numero= Number(form.inNumero.value);

  if(numero%2==0){
    resp.innerText = `${numero} é par`;
  }else{
    resp.innerText = `${numero} é ímpar`;
  }

})