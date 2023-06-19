const form = document.querySelector("form");
const resp1 = document.querySelector(".outMedia");
const resp2=document.querySelector(".outSituacao");

form.addEventListener("submit", (e)=>{

  const nomeAluno = form.inNome.value;
  const nota1=Number(form.inPrimeiraNota.value);
  const nota2= Number(form.inSegundaNota.value);

  let media = (nota1+nota2)/2;

  resp1.innerText = `Média das notas: ${media.toFixed(2)} `;

  if (media>=7){
    resp2.innerText = `Parabéns, ${nomeAluno}, você foi aprovado!`;
    resp2.style.color = "blue";
  } else if (media <7){
     resp2.innerText = `Que pena, ${nomeAluno}, você foi reprovado!`;
     resp2.style.color = "red";
  }

  e.preventDefault();
})