package ex01;

public class Pessoa {
  private String nome;
  private String cidade;
  private int idade;

  public Pessoa(String nome, int idade){
    this.nome=nome;
    this.idade=idade;
  }

  public String getNome(){
    return this.nome;
  }

  public String getCidade(){
    return this.cidade;
  }
  public void setCidade(String cidade){
    this.cidade=cidade;
  }

  public int getIdade(){
    return this.idade;
  }

}
