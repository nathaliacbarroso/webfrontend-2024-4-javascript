// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Função para calcular a conta de uma mesa
function calcularConta() {

    // Capturando o número de pessoas na mesa
    const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

    // Capturando o valor total da conta
    const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

    // Capturando o método de pagamento
    const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');

    // Definindo o valor do desconto com pagamento no pix ou dinheiro (10%)
    let valorComDesconto;

    // Verificando o método de pagamento e aplicando o desconto se necessário
    if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
        valorComDesconto = valorTotal * 0.9;
    } else {
        valorComDesconto = valorTotal;
    }

    // Calculando o valor per capta, ou seja, o valor que cada pessoa deve pagar 
    const valorPorPessoa = valorComDesconto / numeroPessoas;

    // Exibindo o resultado final no console
    console.log(`\nValor total da conta: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Método de pagamento: ${metodoPagamento}`);
    console.log(`Valor com desconto (se aplicável): R$ ${valorComDesconto.toFixed(2)}`);
    console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
}

// Criando um loop para permitir o cálculo de várias contas semelhantes
let continuar = true;

while (continuar) {
    // Chamando a função para calcular a conta
    calcularConta();

      // Perguntando se o usuário deseja calcular outra conta
      const resposta = readline.question('\nDeseja calcular a conta de outra mesa? (sim/nao): ').toLowerCase();
    
      // Se a resposta for 'nao', o loop é encerrado
      if (resposta === 'nao') {
          continuar = false;
      }
  }

console.log('Cálculos encerrados. Obrigado!');