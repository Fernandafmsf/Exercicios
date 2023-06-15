const form = document.querySelector("form");
const resp = document.querySelector(".outValorConta");

form.addEventListener("submit", (e)=>{

  const precoQuilo = form.inPrecoQuilo.value;
  const consumoCliente = form.inConsumo.value;

  let precoConsumo = (consumoCliente/1000)*precoQuilo;

  resp.innerText= `Valor a pagar R$: ${precoConsumo.toFixed(2)}`;

  e.preventDefault();

})