class Veiculo {
    constructor(categoria) {
        this.categoria = categoria;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super('carro');
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const carro1 = new Carro('BMW', '320i', '2020');

console.log(carro1);