
let quantidadeNumeros = prompt('Quantos números você irá digitar?');

let listaNumeros;
let soma=0;
let media = 0; 

//verifica se o número é realmente um número 
function verificaNumero(numero){
  var condicaoNumero; 

  if( isNaN(numero)){
    alert('Você não definiu o número corretamente, tente novamente;');
    condicaoNumero=false;
    
  } else{
    condicaoNumero = true;
  }
  console.log(condicaoNumero);
  return condicaoNumero;
  
}


//se o input for correto, executa a soma dos numeros, caso eles também estejam corretos 
  if ( verificaNumero(quantidadeNumeros) == true){

    for (let i=0;i<quantidadeNumeros;i++){
      
        listaNumeros = Number(prompt('Digite seu número'));

        var verificaçaoLista = verificaNumero(listaNumeros);

        if (verificaçaoLista == true){
          soma = listaNumeros + soma; 
        }else{
          break;
          
        } 
    }

      media = soma/quantidadeNumeros;

      if (verificaçaoLista== true){
        alert('A soma de todos os seus números é: '+soma+   ' e a média dos seus números é: '+ media);
      }
     

  }



