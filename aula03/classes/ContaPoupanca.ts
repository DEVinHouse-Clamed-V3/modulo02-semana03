import ContaBancaria from "./ContaBancaria";
import Calculadora from "./Calculadora";

class ContaPoupanca extends ContaBancaria {
    readonly tipo: string = "Poupança"
    
    sacar(valor: number): boolean {
        if(valor > this.saldo){
            console.log("Saldo insuficiente!")
            return false
        }

        this.saldo = Calculadora.subtrair(this.saldo, valor)
        console.log(`Saque de R$ ${valor} realizado com sucesso.`)
        return true
    }

    deposito(valor: number): void {
        this.saldo = Calculadora.somar(valor, this.saldo)
        console.log(`Depósito de R$ ${valor} realizado com sucesso.`)
    }

    mostrarExtrato(): void {
        console.log(`Seu saldo atual é de R$ ${this.saldo.toFixed(2)}`)
    }

}

export default ContaPoupanca;