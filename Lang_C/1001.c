// Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. 

#include <stdio.h>

int main(void){

  int A, B, X;
  

  printf("Digite um numero:");
  scanf("%d", &A);

  printf("Digite outro numero: ");
  scanf("%d", &B);

  X=A+B;

  printf("X= %d", X);

  return 0;
}