

var param1 = parseInt(prompt('Digite um número entre -1000 e 1000')) ; 
var param2 = parseInt(prompt('Digite outro número entre -1000 e 1000')) ; 

function solution(param1, param2) {
    
    if ( -1000 <=param1 <= 1000 && -1000<=param2<=1000 ){
        solution= param1+param2 ;
        return solution;
    } else{
        alert("Você não definiu um número entre o intervalo esperado. ");
        let msg = 'Tente novamente';
        return msg;
    }
   
    
}

var resultado = solution(param1, param2);
alert('O resultado é: ' + resultado); 