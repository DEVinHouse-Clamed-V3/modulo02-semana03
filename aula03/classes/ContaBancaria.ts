abstract class ContaBancaria {
    nomeTitular: string;
    agencia: number;
    conta: number;
    saldo: number;

    constructor(titularP: string, agenciaP: number, contaP: number){
        this.saldo = 0;
        this.nomeTitular = titularP;
        this.agencia = agenciaP;
        this.conta = contaP;
    }

    abstract sacar(valor: number): void;
    abstract deposito(valor: number): void;
    abstract transferir(conta: ContaBancaria, valor: number): void;
}

export default ContaBancaria;