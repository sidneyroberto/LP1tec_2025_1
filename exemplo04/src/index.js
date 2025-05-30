function contarVogais(str) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    // O caractere está em str[i]
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      contador++; // incrementa o contador
    }
  }

  return contador;
}

function iniciaisDoNome(nomeCompleto) {
  // Quebra a frase em palavras
  const palavras = nomeCompleto.split(" ");

  let iniciais = "";
  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i];

    if (
      palavraAtual !== "de" &&
      palavraAtual !== "do" &&
      palavraAtual !== "da" &&
      palavraAtual !== "das" &&
      palavraAtual !== "dos"
    ) {
      // Pega a letra inicial
      iniciais += palavraAtual[0];
    }
  }

  // Converte para maiúsculo antes de retornar
  return iniciais.toUpperCase();
}

function nomeMaiusculo(nomeCompleto) {
  return nomeCompleto.toUpperCase();
}

module.exports = { contarVogais, iniciaisDoNome, nomeMaiusculo };
