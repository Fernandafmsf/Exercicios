const form = document.querySelector("form");
const resp1 = document.querySelector(".outMedicamento");
const resp2 = document.querySelector(".outPromocao");

form.addEventListener("submit", (e)=>{
  const medicamento = form.inMedicamento.value;
  const preco = form.inPreco.value;

  let promocao= Math.floor(preco*2);

  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve 2 por R$ ${promocao.toFixed(2)}`;

  e.preventDefault();
})