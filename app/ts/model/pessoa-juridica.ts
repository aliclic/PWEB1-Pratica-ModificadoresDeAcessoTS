class PessoaJuridica extends Pessoa {
    
    readonly cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome + ' - Jurídica', idade, dataNascimento);
    }

    get _cnpj() {
        return this.cnpj;
    }
}
