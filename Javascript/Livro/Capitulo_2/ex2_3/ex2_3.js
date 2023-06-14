
const form = document.querySelector("form");
const resp1 = document.querySelector(".outVeiculo");
const resp2 = document.querySelector(".outValorEntrada");
const resp3 = document.querySelector(".outParcelas"); 


form.addEventListener("submit", (e)=>{
  const veiculo = form.inVeiculo.value;
  const preco = Number(form.inPreco.value);

  const primeiraParcela = preco/2;
  const parcelas = primeiraParcela/12;

  resp1.innerText = `Promoção: ${veiculo}`;
  resp2.innerText = `Entrada: R$ ${primeiraParcela.toFixed(2)}`;
  resp3.innerText = `+12x de R$ ${parcelas.toFixed(2)}; `

  e.preventDefault();

})