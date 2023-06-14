#include <stdio.h>

void ft_ultimate_div_mod(int *a, int *b){
  int numberA = *a / *b;
  int numberB = *a % *b;

  *a=numberA;
  *b=numberB;

}

int main (void){

  int a = 5;
  int b = 2;

  printf("A:%d\nB: %d\n",a,b);

  ft_ultimate_div_mod(&a, &b);

  printf("Divisao (a): %d\nResto (b): %d", a, b);

  return 0;
}