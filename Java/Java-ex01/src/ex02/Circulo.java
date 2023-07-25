package ex02;

public class Circulo {
  private double raio;

  public void setRaio(double raio){
    this.raio=raio;

  }

  public double calculaArea(){
    return (raio*raio)*3.14;
  }

  public double calculaPerimetro(){
    return 2*3.14*raio;
  }
}
