/**
 * Assinatura da função:
 *
 * 1 - A palavra reservada function
 * 2 - O nome da função (neste caso, "exibirMensagem")
 * 3 - Conjunto de parâmetros de entrada OU argumentos (neste caso [mensagem])
 */
function exibirMensagem(mensagem) {
  console.log(mensagem); // Este é o corpo da função
}

/**
 * Calcula o montante (valor total) de um empréstimo.
 */
function calcularValorTotalEmprestimo(valor, taxaJuros, qtdeParcelas) {
  const valorTotal = valor * (1 + (taxaJuros / 100) * qtdeParcelas);

  // Retorna o valor calculado para quem invocou a função calcularValorTotalEmprestimo
  return valorTotal;
}

/**
 * Calcula o valor da prestação mensal de um empréstimo
 */
function calcularValorPrestacaoEmprestimo(valor, taxaJuros, qtdeParcelas) {
  // Terceiriza o cálculo do valor total
  const valorTotal = calcularValorTotalEmprestimo(
    valor,
    taxaJuros,
    qtdeParcelas
  );
  const valorPrestacao = valorTotal / qtdeParcelas;
  return valorPrestacao;
}

module.exports = { calcularValorTotalEmprestimo };
