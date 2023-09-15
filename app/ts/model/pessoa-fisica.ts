class PessoaFisica extends Pessoa {

    readonly cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome + ' - Física', idade, dataNascimento);
    }

    get _cpf() {
        return this.cpf;
    }

}
