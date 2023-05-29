

function solution(inputArray) {
  var p = -999;
  var i =0;

  if(2<=inputArray.length<=10 && -1000<=inputArray[i] <=1000){
    
   while ( i<=inputArray.length){  

    var laco = i + 1;

        var num1 = inputArray[i];
        var num2 = inputArray[laco];  
   
        if(num1*num2>p){
            p=num1*num2;
        }
        i++;
    }
    alert(p); 
    return p;

  }

}
var numeros = [3,6,-2,-5,7,3];
solution(numeros);