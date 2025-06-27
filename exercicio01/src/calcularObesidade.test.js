const { calcularGrauObesidade } = require(".");

test("deve calcular corretamente o grau de obesidade abaixo do peso", function () {
  const altura = 1.75;
  const peso = 50;

  const grau = calcularGrauObesidade(altura, peso);
  expect(grau).toBe("Abaixo do peso");
});
