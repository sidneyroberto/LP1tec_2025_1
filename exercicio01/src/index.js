const { altura, massa } = require("./dados.json");

export function calcularIMC(altura, massa) {
  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    return "Abaixo do peso";
  }

  if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  }

  if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  }

  if (imc >= 30 && imc < 35) {
    return "Obesidade de grau I";
  }

  if (imc >= 35 && imc < 40) {
    return "Obesidade de grau II";
  }

  return "Obesidade de grau III";
}
