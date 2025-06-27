const { contarVogais, iniciaisDoNome, nomeMaiusculo } = require(".");

describe("Testes das funções de strings", function () {
  test("deve contar corretamente as vogais", function () {
    const frase = "Ontem eu vi um animal!";
    const quantidade = contarVogais(frase);
    expect(quantidade).toBe(9);
  });

  test("deve retornar corretamente as iniciais dos nomes", function () {
    let resposta = iniciaisDoNome("Sidney Roberto de Sousa");
    expect(resposta).toBe("SRS");

    resposta = iniciaisDoNome("maria clara oliveira");
    expect(resposta).toBe("MCO");
  });

  test("deve converter um nome para caixa alta corretamente", function () {
    let resposta = nomeMaiusculo("ana silva");
    expect(resposta).toBe("ANA SILVA");

    resposta = nomeMaiusculo("Ygo Aquino Brito");
    expect(resposta).toBe("YGO AQUINO BRITO");
  });
});
