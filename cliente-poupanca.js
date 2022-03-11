function Cliente(nome,cpf, email, saldo){

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depostiar = function(valor){
        this.saldo += valor
    }

}

function ClientePoupanca(nome,cpf, email, saldo, saldoPoup){

    Cliente.call(this,nome,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca('Ju', '12143253', 'ju@email.com', 100, 200)

ClientePoupanca.prototype.depostiarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depostiarPoup(108)

console.log(ju.saldoPoup)
