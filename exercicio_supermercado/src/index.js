const { createReadStream } = require("fs");
const { join } = require("path");
const { createInterface } = require("readline");

const caminho = join(__dirname, "data", "itens_supermercado.csv");
const interface = createInterface({
  input: createReadStream(caminho),
});

let contador = 1;
let somatorioAcougue = 0;
interface.on("line", function (linha) {
  if (contador > 1) {
    const partes = linha.split(";");
    const item = {
      descricao: partes[1],
      quantidadeEmEstoque: Number(partes[2]),
      precoUnitario: Number(partes[3]),
      categoria: partes[4],
    };
    const precoTotalItem = item.quantidadeEmEstoque * item.precoUnitario;

    switch (item.categoria) {
      case "açougue":
        item;
    }
  }
  contador++;
});

// Executa após processar todo o arquivo
interface.on("close", function () {
  // Imprima aqui os resultados
});
