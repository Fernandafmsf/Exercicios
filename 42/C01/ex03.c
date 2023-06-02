#include <stdio.h>

void ft_div_mod(int a, int b, int *div, int *mod){

  *div = a/b;
  *mod=a%b;

}

int main (void){
  int numeroA;
  int numeroB;
  int div;
  int mod;

  numeroA=5;
  numeroB=2;

//Quando vamos informar uma variavel a função e essa variavel, na função, será um ponteiro, devemos colocar '&'
  ft_div_mod(numeroA,numeroB, &div, &mod);

  printf("Numero a: %d \nNumero b: %d \nDiv:%d Mod:%d", numeroA,numeroB,div, mod);

  return 0;
}