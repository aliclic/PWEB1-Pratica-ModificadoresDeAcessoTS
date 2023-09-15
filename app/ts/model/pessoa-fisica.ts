class PessoaFisica extends Pessoa {

    private cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome + ' - Física', idade, dataNascimento);
        this._cpf = cpf; // não deve ser alterado dentro da própria classe
    }

    get _cpf() {
        return this.cpf;
    }

    set _cpf(novoCpf: string) {
        this.cpf = novoCpf;
    }

}