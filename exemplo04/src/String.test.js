const { contarVogais } = require(".");

describe("Testes das funções de strings", function () {
  test("deve contar corretamente as vogais", function () {
    const frase = "Ontem eu vi um animal!";
    const quantidade = contarVogais(frase);
    expect(quantidade).toBe(9);
  });
});
