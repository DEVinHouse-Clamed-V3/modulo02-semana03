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
        console.log(`Depósito de R$ ${valor} realizado com sucesso.`)
    }

    sacar(valor: number): boolean {
        if(valor > this.saldo){
            console.log("Saldo insuficiente!")
            return false
        }

        let taxa = valor * this.taxaCesta / 100

        this.saldo = Calculadora.subtrair(this.saldo, valor + taxa)
        console.log(`Saque de R$ ${valor} realizado com sucesso.`)
        return true
    }

    mostrarExtrato(){
        console.log(`Seu saldo atual é de R$ ${this.saldo.toFixed(2)}`)
    }
}

export default ContaCorrente