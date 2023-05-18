//read 2 double precision floating point values A and B. Then, calculate the student average. 
//grade 1 has weight 3.5 and grade 2 has 7.5

#include <stdio.h>

int main (void){

  double A, B, media; 

  printf("Digite a primeira nota:");
  scanf("%lf", &A);

  printf("Digite a segunda nota:");
  scanf("%lf", &B);

  media=((A*3.5)+(B*7.5))/11;

  printf("Media = %.6lf", media);

  return 0;
}