// A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
// Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

#include <stdio.h>

int main(void){

  double raio;
  double PI = 3.14159; 
  double area;

  printf("Digite o raio do circulo:");
  scanf("%lf", &raio); //não limitar o número de casas decimais onde a variável é declarada 

  area = PI * (raio*raio); 

  printf("A area do circulo eh: %.4lf ", area);

  return 0;

}