const exemplo = "Não vou pegar DP!";
console.log(exemplo[5]);

for (let i = 0; i < exemplo.length; i++) {
  console.log(exemplo[i]);
}

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

module.exports = { contarVogais };
