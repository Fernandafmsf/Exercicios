const form = document.querySelector("form");
const resp1 = document.querySelector(".outNotasCem");
const resp2 = document.querySelector(".outNotasCinquenta");
const resp3 = document.querySelector(".outNotasDez");

form.addEventListener("submit", (e)=>{
   e.preventDefault();
  const valorSaque=Number(form.inValor.value);


  if(valorSaque%10!=0){
    resp1.innerText=`O valor do seu saque(${valorSaque.toFixed(2)}) não é posível ser feito`;
    form.inValor.focus();
    return;
  }

  //Depois testar com laço for 
  const notasCem = Math.floor(valorSaque/100); //ex.: 260/100=26,0
  let resto= valorSaque%100;//260%100=60. Ou seja, resta 60. Fica com resto de 60 e assim vai

  const notasCinquenta=Math.floor(resto/50);
  resto = resto%50;

  const notasDez = Math.floor(resto/10);

  if(notasCem>0){
    resp1.innerText = `Notas de cem: ${notasCem}`;
  }
  if(notasCinquenta>0){
    resp2.innerText = `Notas de cinquenta: ${notasCinquenta}`;
  }
  if(notasDez>0){
    resp3.innerText = `Notas de dez: ${notasDez}`;
  }


 
})