// type ID = number | string;

// interface Usuario {
//     id: ID;
//     nome: string;
//     email: string;
//     senha: string;
//     ativo?: boolean;
//     // ativo: boolean | undefined;
// }

// const usuario1: Usuario = {
//     id: 1,
//     nome: "Bruno",
//     email: "email@email.com",
//     senha: "123456"
// }

// const usuario2: Usuario = {
//     id: 2,
//     nome: "Marcelo",
//     email: "email@email.com",
//     senha: "123456"
// }

import ContaCorrente from "./classes/ContaCorrente"
import ContaPoupanca from "./classes/ContaPoupanca"

const contaTiago = new ContaCorrente("Tiago", 123, 45678, 5)
contaTiago.deposito(200)
contaTiago.mostrarExtrato()
contaTiago.sacar(50)
contaTiago.mostrarExtrato()

const brunoConta = new ContaCorrente("Bruno", 123, 1234, 5)
brunoConta.deposito(200)
brunoConta.mostrarExtrato()
brunoConta.transferir(contaTiago, 100)
brunoConta.mostrarExtrato()

const contaDominice = new ContaPoupanca("Dominice", 123, 8521)
contaDominice.deposito(200)
contaDominice.mostrarExtrato()
contaDominice.sacar(50)
contaDominice.mostrarExtrato()