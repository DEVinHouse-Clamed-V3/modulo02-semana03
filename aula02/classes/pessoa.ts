class Pessoa {
    nome: string;
    idade: number;
    private cpf: string;

    constructor(nomeParam: string, idadeParam: number, cpfParam: string){
        this.nome = nomeParam;
        this.idade = idadeParam;
        this.cpf = cpfParam;
    }

    apresentar(): void {
        console.log(`Olá! Meu nome é ${this.nome}, e eu tenho ${this.idade} anos!`) 
    }
}

export default Pessoa