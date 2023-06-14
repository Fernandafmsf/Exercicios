#include <unistd.h>



void ft_putchar(char c){

  write(1,&c,1);

}

//essa parte do código é utilizada apenas para ve lo funcionar
//é importante deixa la comentada ao enviar 

int main (void){
  ft_putchar('B');
}

