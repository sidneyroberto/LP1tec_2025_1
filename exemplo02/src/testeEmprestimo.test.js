const { calcularValorTotalEmprestimo } = require("./index");

test("deve calcular o montante do empréstimo corretamente", function () {
  const montante = calcularValorTotalEmprestimo(1000, 1.5, 12);
  expect(montante).toBe(1180);
});
