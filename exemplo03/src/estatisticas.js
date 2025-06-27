function media(conjunto) {
  // Soma todos os valores
  let soma = 0; // acumulador
  for (let i = conjunto.length - 1; i > -1; i--) {
    soma = soma + conjunto[i];
  }

  // Calcula o valor da média
  const resultado = soma / conjunto.length;
  return resultado;
}

function mediana(conjunto) {
  const tamanho = conjunto.length;

  // Pega o piso do valor da metade
  const metade = Math.floor(tamanho / 2);

  // Ordena o conjunto em ordem crescente
  conjunto = conjunto.sort();

  // Verifica se o tamanho do conjunto é ímpar
  if (tamanho % 2 === 1) {
    return conjunto[metade];
  }

  const media = (conjunto[metade] + conjunto[metade - 1]) / 2;
  return media;
}
