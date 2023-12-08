function subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  let resultado = subtrair(235, 214);
  let nivel = ""
  
  if (resultado < 10){
  nivel = "Ferro";
  }
  if (resultado >= 11 && resultado <= 20){
  nivel = "Bronze";
  }
  if (resultado >= 21 && resultado <= 50){
  nivel = "Prata";
  }
  if (resultado >= 51 && resultado <= 80){
  nivel = "Ouro";
  }
  if (resultado >= 81 && resultado <= 90){
  nivel = "Diamante";
  }
  if (resultado >= 91 && resultado <= 100){
  nivel = "Lendário";
  }
  if (resultado >= 101){
  nivel = "imortal";
  }
  
  console.log("O Herói tem de saldo de " + resultado + " está no nível de " + nivel)