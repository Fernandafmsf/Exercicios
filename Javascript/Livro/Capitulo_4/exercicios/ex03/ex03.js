//Elaborar um programa que simule um parquímetro, que deve ler o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exibir a mensagem "Valor insuficiente"
/*Tabela:
1,00 = 30 min
1,75 = 60min
3 = 120min
*/
const form = document.querySelector("form");
const resp1=document.querySelector(".outTempo");
const resp2=document.querySelector(".outTroco");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const valor = Number(form.inValor.value);
  let tempo;
  let troco;

  if(valor<1){
    resp1.innerText=`Valor insuficiente`
  }else if(valor>=3){
    tempo=(Math.floor(valor/3))*120;
    troco=valor%3;
  }else if(valor>=1.75){
    tempo = Math.floor(valor / 1.75) * 60;
    troco = valor % 1.75;
  }else{
    tempo = Math.floor(valor / 1) * 30;
    troco = valor % 1;
  }

  resp1.innerText = `Tempo: ${tempo}min`;
  resp2.innerText= `Troco: R$ ${troco.toFixed(2)}`;

})

