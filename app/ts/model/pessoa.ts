class Pessoa {

    protected nome: string;
    private idade: number;
    private dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;    
    }

    get _nome() {
        return this.nome;
    }

    set _nome(novoNome: string) {
        this.nome = novoNome;
    }

    get _idade() {
        return this.idade;
    }

    set _idade(novaIdade: number) {
        this.idade = novaIdade;
    }

    get _dataNascimento() {
        return this.dataNascimento;
    }

    set _dataNascimento(novaDataNascimento: Date) {
        this.dataNascimento = novaDataNascimento;
    }
}