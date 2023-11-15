class Banco {
    constructor(cliente, CPF) {
        this._cliente = cliente;
        this._CPF = CPF;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(novoNome) {
        if (typeof novoNome === 'string') {
            this._cliente = novoNome;
        } else {
            console.log("Insira um nome válido, por favor.");
        }
    }

    get CPF() {
        return this._CPF;
    }

    set CPF(novoCPF) {
        this._CPF = novoCPF;
    }
}

let p1 = new Banco("Rafael", 12150212451);
let p2 = new Banco("Neymar", 32150212452); 
let p3 = new Banco("Eduardo", 52150212453);
let p4 = new Banco("Cauly", 72150212454);

console.log(`O nome do cliente é ${p1.cliente} e tem o CPF ${p1.CPF}`);
console.log(`O nome do cliente é ${p2.cliente} e tem o CPF ${p2.CPF}`);
console.log(`O nome do cliente é ${p3.cliente} e tem o CPF ${p3.CPF}`);
console.log(`O nome do cliente é ${p4.cliente} e tem o CPF ${p4.CPF}`);