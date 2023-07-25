package ex01;

public class TestaPessoa {
  
  public static void main(String[] args) {
    Pessoa p1 = new Pessoa("Fernanda", 20);
    p1.setCidade("Rio de Janeiro");

    System.out.println("Nome: "+p1.getNome() + "\nIdade: " + p1.getIdade());
    System.out.println("Cidade: "+p1.getCidade());

  }

}
