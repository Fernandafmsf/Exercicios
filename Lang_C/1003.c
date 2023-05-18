// Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

#include <stdio.h>

int main(void){

  double A, B, SOMA; 

  printf("Digite um valor de entrada para A: ");
  scanf("%lf", &A);

  printf("Digite um valor de entrada para B: ");
  scanf("%lf", &B); 

  SOMA = A+B; 

  printf("Soma igual a: %.2lf", SOMA);

  return 0;

}