// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.

#include <stdio.h>

int main (void){

double A,B,PROD;
 
printf("Digite um numero: ");
scanf("%lf", &A);

printf("Digite outro numero: ");
scanf("%lf", &B);

PROD = A*B;

printf("PROD = %.0lf \n", PROD);
return 0 ; 
}