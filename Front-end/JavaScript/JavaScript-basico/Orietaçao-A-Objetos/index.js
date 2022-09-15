class Cliente {
    nome
    cpf
    agencia
    saldo
}

const cliente1 = new Cliente()

cliente1.nome    = 'Nathan'
cliente1.cpf     = 10000000001
cliente1.agencia = 1001
cliente1.saldo   = 0

console.log(`ola ${cliente1.nome}`)