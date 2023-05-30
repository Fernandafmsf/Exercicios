#include <unistd.h>
int n = 48;
void ft_print_numbers(void){
  while(n>=48 && n<=57){
    write(1,&n,1);
    n++;
  }
}

int main(void){
  ft_print_numbers();
}