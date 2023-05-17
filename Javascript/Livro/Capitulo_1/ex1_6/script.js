
//Ler dois números e calcular a soma entre eles-->

    const num1 = Number(prompt('Digite um número: ')); //o método number transforma o input do prompt em número, já que todo input do prompt é visto como texto
    const num2 = Number(prompt('Digite outro número:'));
    const soma = num1+num2; 
  
    alert(`A soma dos dois números é: ${soma}`);