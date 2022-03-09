const clientes = [
    {
        nome: "Andre",
        cpf: "12346543",
        dependentes: [{
            nome: "Sara",
            parentesco: "Filha",
            dataNasc:"20/03/2011"
        },

    {
        nome: "Davi",
        parentesco: "Filho",
        dataNasc:"20/03/2008"}],
    },

    {
        nome: "Julianna",
        cpf: "12346543",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc:"20/03/2009"}],
    }
]

const listaDependetes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependetes)
   