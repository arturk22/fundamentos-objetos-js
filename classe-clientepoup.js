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


class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depostiarPoupanca(valor){
        this.saldoPoupanca += valor
    }
    
}


const andre = new ClientePoupanca('Andre', 'andre@email.com', '1124144346', 150, 300)

console.log(andre)