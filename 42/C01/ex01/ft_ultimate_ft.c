#include <unistd.h>
#include <stdio.h>

void ft_ultimate_ft(int *********nbr){
  *********nbr = 42;
}


int main (void){

  int a; 
  int *nbr1;
  int **nbr2;
  int ***nbr3;
  int ****nbr4;
  int *****nbr5;
  int ******nbr6;
  int *******nbr7;
  int ********nbr8;
  int *********nbr9;


//errei nessa parte. Lembrar de sempre atribuir o valor ao primeiro ponteiro e que o ponteiro do ponteiro sempre receberá o valor do seu antecessor  
  nbr1 = &a;
  nbr2 = &nbr1;
  nbr3 = &nbr2;
  nbr4 = &nbr3;
  nbr5 = &nbr4;
  nbr6 = &nbr5;
  nbr7 = &nbr6;
  nbr8 = &nbr7;
  nbr9 = &nbr8;

  ft_ultimate_ft(nbr9);

  printf("a:%d", a);

  return 0;
}