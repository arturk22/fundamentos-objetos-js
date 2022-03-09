const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12346543",
    email: "andre@email.com",
    fones: ["897893340789798", "89340789798"],

    dependentes: [{
    nome: "Sara",
    parentesco: "Filha",
    dataNasc:"20/03/2011"
    }, 
    {
    nome: "Davi",
    parentesco: "Filho",
    dataNasc:"20/03/2008"}],

    saldo:100,

    depositar: function(valor){
        this.saldo += valor
    }
}
   
function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente);

    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)