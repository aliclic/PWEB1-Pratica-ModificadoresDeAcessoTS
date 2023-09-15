class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + ' - Jurídica', idade, dataNascimento);
        this._cnpj = cnpj; // não deve ser alterado dentro da própria classe
    }
    get _cnpj() {
        return this.cnpj;
    }
    set _cnpj(novoCnpj) {
        this.cnpj = novoCnpj;
    }
}
