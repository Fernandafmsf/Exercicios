const form = document.querySelector("form");
const resp1= document.querySelector(".outPesoIdeal");

form.addEventListener("submit", (e)=>{

  const nome = form.inNome.value;
  const masculino = form.inMasculino.checked;
  const altura = Number(form.inAltura.value);
  let pesoIdeal;

  if (masculino==true){
    pesoIdeal= 22 * Math.pow(altura,2);

  } else{
    pesoIdeal = 21 * Math.pow(altura,2);

  }

  resp1.innerText = `${nome}: Seu peso ideal é: ${pesoIdeal.toFixed(3)}Kg`;

  e.preventDefault();
})

form.addEventListener("reset", ()=>{
  resp1.innerText=``; //limpa o conteudo da resposta 
})