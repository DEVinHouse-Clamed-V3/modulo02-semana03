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

    abstract sacar(valor: number): boolean;
    abstract deposito(valor: number): void;
    abstract mostrarExtrato(): void;

    transferir(conta: ContaBancaria, valor: number): void {
        if(this.sacar(valor)){
            conta.deposito(valor);
            console.log(`Transferência para ${conta.nomeTitular} realizada com sucesso!`)
            return
        }

        console.log("Não foi possível realizar a transferência!")
    }
}

export default ContaBancaria;