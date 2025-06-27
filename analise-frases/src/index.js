const { readFileSync } = require("fs");
const { join } = require("path");

// Abre o arquivo frases.txt, que está na pasta data
const caminho = join(__dirname, "data", "frases.txt");

// Lê o conteúdo do arquivo
const conteudo = readFileSync(caminho, { encoding: "utf-8" });

// Quebra o conteúdo em frases
const frases = conteudo.split("\n");

// Vetores para guardas as frases de elogios e ofensas
const frasesDeElogios = [];
const frasesDeOfensas = [];

for (let i = 0; i < frases.length; i++) {
  // Pega a frase da linha i + 1
  const fraseAtual = frases[i];

  /**
   * FAÇA A PARTIR DAQUI O PROCESSAMENTO NECESSÁRIO PARA
   * PREENCHER OS VETORES DE FRASES CORRETAMENTE!!!
   */
}

console.log(`Quantidade de frases de elogios: ${frasesDeElogios.length}`);
console.log(`Quantidade de frases de ofensas: ${frasesDeOfensas.length}`);

console.log("Frases de elogios:");
for (let i = 0; i < frasesDeElogios; i++) {
  console.log(frasesDeElogios[i]);
}

console.log("Frases de ofensas:");
for (let i = 0; i < frasesDeOfensas; i++) {
  console.log(frasesDeOfensas[i]);
}
