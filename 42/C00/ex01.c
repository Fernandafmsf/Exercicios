#include <unistd.h>
int a = 97; 

void ft_print_alphabet(void){
  while (a <=122 && a>=97 ){
    write(1,&a,1);
    a++;
  }
}

int main(void){
  ft_print_alphabet();
}