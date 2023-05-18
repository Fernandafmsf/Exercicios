//pegar elemento form e h3
const formulario = document.querySelector("form");
const resposta = document.querySelector("h3"); 

//adicionar um ouvinte de evento que será acionado quando o submit for clicado 
formulario.addEventListener("submit", (e) => {
  const nome = formulario.inNome.value //obtem o nome digitado no form 
  resposta.innerText = `Olá ${nome}`; // exibe a resposta do programa 

  e.preventDefault() //evita envio do form 
})