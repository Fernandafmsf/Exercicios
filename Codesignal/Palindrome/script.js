function reverseString(str){
  var splitString=str.split('');
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join('');

  return joinArray;
}

function solution(inputString) {
    
   var palindrome= reverseString(inputString);
    
    if (1<= inputString.lengt<=10**5 &&inputString==palindrome){
        alert('O palindromo é: ' + palindrome);
    } else{
        alert('Não é um palindromo: ' + palindrome); 
    }
  
}

var word = prompt('Digite uma palavra');
solution(word);
