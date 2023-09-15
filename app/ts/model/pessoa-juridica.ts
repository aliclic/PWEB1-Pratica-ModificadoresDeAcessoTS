class PessoaJuridica extends Pessoa {
    
    private cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome + ' - Jurídica', idade, dataNascimento);
        this._cnpj = cnpj; // não deve ser alterado dentro da própria classe
    }

    get _cnpj() {
        return this.cnpj;
    }

    set _cnpj(novoCnpj: string) {
        this.cnpj = novoCnpj;
    }
}