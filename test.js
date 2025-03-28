/*function classificarPedido(valortot){
    if (valortot < 50) {
        return "Frete inexistente";
    } else if (valortot >= 50 && valortot <= 200) {
        return "Frete com custo adicional";
    } else {
      if (valortot > 200.01) {
        return "Frete grátis";}
    }

}

console.log(classificarPedido(0));*/

/*class Veiculo {
  constructor(modelo, ano) {
      this.modelo = modelo;
      this.ano = ano;
  }

  calcularConsumo() {
      console.log("Método genérico! Deve ser sobrescrito pelas subclasses.");
  }
}

class Carro extends Veiculo {
  constructor(modelo, ano, eficienciaKmLitro) {
      super(modelo, ano); 
      this.eficienciaKmLitro = eficienciaKmLitro; 
  }

  calcularConsumo(quilometragem) {
      if (this.eficienciaKmLitro > 0) {
          return quilometragem / this.eficienciaKmLitro;
      } else {
          return "Eficiência inválida!";
      }
  }
}

class Moto extends Veiculo {
  constructor(modelo, ano, eficienciaKmLitro) {
      super(modelo, ano); 
      this.eficienciaKmLitro = eficienciaKmLitro;
  }

  calcularConsumo(quilometragem) {
      if (this.eficienciaKmLitro > 0) {
          return quilometragem / this.eficienciaKmLitro;
      } else {
          return "Eficiência inválida!";
      }
  }
}

const carro1 = new Carro("Sedan", 2020, 12.5);
const moto1 = new Moto("Esportiva", 2022, 30.0);

console.log(`Consumo do carro ${carro1.modelo} do ano ${carro1.ano} para 250 km: ${carro1.calcularConsumo(250).toFixed(2)} litros`);
console.log(`Consumo da moto ${moto1.modelo} do ano ${moto1.ano} para 250 km: ${moto1.calcularConsumo(250).toFixed(2)} litros`);*/

/* //código simples 
function calcularPouso(velInicial, desaceleracao, tempo){
  var velocidade = 0;
  var velInicial = velInicial;
  var desaceleracao = desaceleracao;
  var tempo = tempo;
  if (velInicial < 0 || desaceleracao < 0 || tempo < 0) {
    return "Valores inválidos!";
  } else{
  velocidade = velInicial - desaceleracao*tempo;}
  return velocidade;
}

var calculo1 = calcularPouso(100, 10, 5);
console.log(calculo1);*/

function MultiplicarMatrizesInvestimento(matrizA, matrizB) {
  let linhasA = matrizA.length;
  let colunasA = matrizA[0].length;
  let linhasB = matrizB.length;
  let colunasB = matrizB[0].length;

  if (colunasA !== linhasB) {
      return "Erro: O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.";
  }

  let matrizResultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

  for (let i = 0; i < linhasA; i++) {
      for (let j = 0; j < colunasB; j++) {
          for (let k = 0; k < colunasA; k++) {
              matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
          }
      }
  }

  return matrizResultado;
}

function ImprimirMatriz(matriz) {
  matriz.forEach(linha => console.log(linha.join("\t")));
}

let investimentos = [
  [1000, 2000], 
  [1500, 2500]
];

let fatoresCrescimento = [
  [1.1, 0.9], 
  [0.8, 1.2]
];

let impactoFinanceiro = MultiplicarMatrizesInvestimento(investimentos, fatoresCrescimento);

console.log("Impacto financeiro dos investimentos ao longo do tempo:");
ImprimirMatriz(impactoFinanceiro);