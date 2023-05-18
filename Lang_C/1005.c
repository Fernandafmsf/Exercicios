//read 2 double precision floating point values A and B. Then, calculate the student average. 
//grade 1 has weight 3.5 and grade 2 has 7.5

#include <stdio.h>

int main (void){

  float A, B, media; 

  printf("Digite a primeira nota:");
  scanf("%f", &A);

  printf("Digite a segunda nota:");
  scanf("%f", &B);

  if(A>10 || B>10){
    printf("Voce digitou um numero maior que 10");
    return 0;
  } else{
    
    media = ((A * 3.5) + (B * 7.5)) / 11;

    printf("Media = %.6f", media);

    return 0;
  }

 
}