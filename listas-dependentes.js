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
    }]
}

cliente.dependentes.push({
    nome: "Davi",
    parentesco: "Filho",
    dataNasc:"20/03/2008"
    })


const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc==="20/03/2008")
