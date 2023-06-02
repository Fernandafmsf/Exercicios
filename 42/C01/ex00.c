#include <unistd.h>
#include <stdio.h>


//criação da função para atribuir o numero 42 ao ponteiro informado
void ft_ft(int *nbr){

  *nbr = 42;

}

int main (void){
 
 //primeiro criamos uma variavel para receber o numero 
 int a; 

 //depois, inicializamos o ponteiro 
 int *ptr; 

 //e então apontamos o ponteiro à variavel
  ptr=&a;

  //e informamos o ptr como parametro para a função, para que, dentro dela, haja a escrita do numero 42
  ft_ft(ptr);

  //mostramos o resultando
  printf("%d", a);


}