// function saudacao(nome: string): string{
//     return `Olá, ${nome}! Seja bem-vindo!`
// }
// const resultado = saudacao("Bruno")
// console.log(resultado)

// function mensagem(): void {
//     console.log("A aula 02 já começou!")
// }

// mensagem()

function executarOperacao(
    valorA: number,
    valorB: number,
    operacaoFunc: (x: number, y: number) => number  
): number{
    return operacaoFunc(valorA, valorB);
}

const soma = (a: number, b: number):number => a + b;
const subtracao = (a: number, b: number):number => a  - b;

console.log("soma " + executarOperacao(5, 3, soma))
console.log("subtração " + executarOperacao(5, 3, subtracao))