const form = document.querySelector("form");
const resp1 = document.querySelector(".outValor");

form.addEventListener("submit", (e)=>{
  const valor = form.inValor.value;
  const tempo = form.inTempo.value;

  let fracaoTempo = Math.ceil(tempo/15);
  let valorTotal = fracaoTempo*valor;

  resp1.innerText = `Valor a pagar R$:${valorTotal.toFixed(2)}`

  e.preventDefault();
})