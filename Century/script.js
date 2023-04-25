function solution(year) {

    var number = (year/100); 
    var century;
    
    for(century=0; century<=number;century++){
        console.log(century + 'number'+ number);
    }

    if (parseInt(number) == parseFloat(number)){
      century--;
    } 

    alert('O século é: '+ century); 
    return century; 
}

year = prompt('Digite um ano');
solution(year);


