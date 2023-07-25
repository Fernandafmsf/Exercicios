const form = document.querySelector("form");
const resp1=document.querySelector("pre");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const numero =Number(form.inNumero.value);
  let resposta="";//conceito importante 


  for (let i=1;i<=10;i++){
    resposta=`${resposta}${numero}x${i} = ${numero*i}\n`
    //para mostrar o resultado no html precisamos ir salvando esse conteudo em uma variavel, diferente do console log que é só 'jogar' lá
    console.log(numero+"x"+i+"="+(numero*i));
    
  }
  resp1.innerText =resposta;
})