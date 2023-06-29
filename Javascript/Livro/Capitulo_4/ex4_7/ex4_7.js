const form = document.querySelector("form");
const resp = document.querySelector(".outRaiz");

form.addEventListener("submit", (e)=>{

  const numero = Number(form.inNumero.value);
  const raiz = Math.sqrt(numero);

  if(Number.isInteger(raiz)){
    resp.innerText = `A raiz é:  ${raiz}`;
  }else{
    resp.innerText = `Não há raiz exata para o numero ${numero}`;
  }
 
  e.preventDefault();
})