let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

console.log()

const pessoa1 = new Pessoa('Alic', 20, new Date("2003-09-10"));
const pessoa2 = new PessoaFisica('Victor', 19, new Date("2004-02-24"), '12345');
const pessoa3 = new PessoaJuridica('Caio', 30, new Date("1992-12-10"), '56789');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);