import Pedido from "./classes/pedido";

const pedido1 = new Pedido("Bruno", "Lasanha", "Sorvete", 15)
const pedido2 = new Pedido("Gustavo", "Churrasco")
const pedido3 = new Pedido("Alex", "Peixe", undefined, 5)

console.log(pedido1.detalhesPedido())
console.log(pedido2.detalhesPedido())
console.log(pedido3.detalhesPedido())