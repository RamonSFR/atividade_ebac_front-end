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

const carro1 = new Carro('BMW', '320i', '2020', '184');;
const carro2 = new Carro('Mitsubishi', 'Lancer Evo X', '2008', '295');
const carro3 = new Carro('Chevrolet', 'Opala', '1987', '250');

const moto1 = new Moto('Kawasaki', 'Ninja', '2012', '300');
const moto2 = new Moto('Yamaha', 'XJ6', '2012', '600');
const moto3 = new Moto('Ducati', 'Diavel', '2020', '1158');

const caminhao1 = new Caminhao('Volvo', 'FH16', '2020', '780');

let veiculos = [carro1, carro2, carro3, moto1, moto2, moto3, caminhao1];
console.log(veiculos);