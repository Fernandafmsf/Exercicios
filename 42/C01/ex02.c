#include <stdio.h>

void ft_swap(int *a, int *b){

  int swap; 
  swap=*a;

  *a=*b;

  *b=swap;

}

int main (void){

  int a;
  int b;
  int *ptrA;
  int *ptrB;
  
  a=10;
  b=20;

  ptrA=&a;
  ptrB=&b;

  ft_swap(ptrA, ptrB);

  printf("a:%d e b:%d", a, b);

return 0; 
}