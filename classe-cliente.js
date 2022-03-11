class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    deposistar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

const andre = new Cliente('Andre', 'andre@email.com', '1124144346', 150)

console.log(andre)