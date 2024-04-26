class Veiculo {
    constructor(categoria) {
        this.categoria = categoria;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, cavalos) {
        super('carro');
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cavalos = cavalos;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super('moto');
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cilindradas = cilindradas;
    }
}

class Caminhao extends Veiculo {
    constructor(marca, modelo, ano, cavalos) {
        super('caminhao');
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cavalos = cavalos;
    }
}

const carro1 = new Carro('BMW', '320i', '2020', '184');

const moto1 = new Moto('Kawasaki', 'Ninja', '2012', '300')

console.log(carro1);
console.log(moto1);