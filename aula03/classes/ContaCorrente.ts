import ContaBancaria from "./ContaBancaria";
import Calculadora from "./Calculadora";

class ContaCorrente extends ContaBancaria {
    static readonly tipo: string = "Corrente";
    taxaCesta: number;

    constructor(titularP: string, agenciaP: number, contaP: number, taxaCestaP: number){
        super(titularP, agenciaP, contaP);
        this.taxaCesta = taxaCestaP;
    }

    deposito(valor: number): void{
        this.saldo = Calculadora.somar(valor, this.saldo)
    }

    sacar(valor: number): void {
        if(valor > this.saldo){
            console.log("Saldo insuficiente!")
            return
        }

        this.saldo = Calculadora.subtrair(this.saldo, valor)
    }

    transferir(conta: ContaBancaria, valor: number): void {
        this.sacar(valor);
        conta.deposito(valor);
    }
}

export default ContaCorrente