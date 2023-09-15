class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome + ' - Física', idade, dataNascimento);
        this._cpf = cpf; // não deve ser alterado dentro da própria classe
    }
    get _cpf() {
        return this.cpf;
    }
    set _cpf(novoCpf) {
        this.cpf = novoCpf;
    }
}
