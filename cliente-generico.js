function Cliente(nome,cpf, email, saldo){

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depostiar = function(valor){
        this.saldo += valor
    }

}

const andre = new Cliente("André", "1234544532", "andre@email.com", 100)

console.log(andre)