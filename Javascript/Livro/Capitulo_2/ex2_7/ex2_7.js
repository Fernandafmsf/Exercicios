const form = document.querySelector("form");
const resp1 = document.querySelector(".outPromocao");
const resp2=document.querySelector(".outValorProduto");

form.addEventListener("submit", (e)=>{
  const produto = form.inProduto.value;
  const preco = form.inPreco.value;

  let produtoPromocao = preco/2;
  let promocao= produtoPromocao + (preco*2);

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;

  resp2.innerText = `O 3 produto custa: R$: ${produtoPromocao.toFixed(2)}`;

  e.preventDefault();

})