interface Forma {
    calcularArea(): number;
}

class Retangulo implements Forma {
    base: number;
    altura: number;

    constructor(baseP: number, alturaP: number){
        this.base = baseP;
        this.altura = alturaP
    }

    calcularArea(): number{
        return this.base * this.altura
    }   
}

class Circulo implements Forma {
    raio: number;

    constructor(raioP: number){
        this.raio = raioP;
    }

    calcularArea(): number{
        return Math.PI * Math.pow(this.raio, 2)
    }   
}

const circulo1 = new Circulo(6);
const retangulo1 = new Retangulo(2, 3);

console.log(circulo1.calcularArea())
console.log(retangulo1.calcularArea())