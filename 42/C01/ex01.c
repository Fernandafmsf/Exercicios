#include <stdio.h>

void ft_ultimate_ft(int *********nbr){

  *********nbr=42;
}

int main(void){
//primeiro declarando a variavel 
  int n; 
  //inicializando cascata de ponteiros 
  int *nbr8;
  int **nbr7;
  int ***nbr6;
  int ****nbr5;
  int *****nbr4;
  int ******nbr3;
  int *******nbr2;
  int ********nbr1;
  int *********nbr;



  //atribuindo ponteiros a ponteiros, sendo que o primeiro aponta para n e vai passando para os outros 
  
  
  //a função ft_ultimate_ft vai jogar o valor no nbr(tem que ser nesse porque é o que está com a mesma quantidade de asteriscos que o parametro da função)

  //e o nbr vai ir escrevendo esse valor nos outros ponteiros. Não devemos nos esquecer de utilizar o caracter "&" nas variáveis que estão recebendo o valor 

  nbr8=&n;
  nbr7=&nbr8;
  nbr6 = &nbr7;
  nbr5 = &nbr6;
  nbr4 = &nbr5;
  nbr3 = &nbr4;
  nbr2 = &nbr3;
  nbr1 = &nbr2;
  nbr  = &nbr1;

  ft_ultimate_ft(nbr);

  // aqui exibimos o valor. É utilizado o 'n' por ser o 'ultimo' das atribuições, ou seja, se estiver correto nele, está em todos. Podemos utilizar outros ponteiros tb. Funcionaria igual para o '********nbr1', por exemplo 
  printf("%d", n);

  return 0;
}