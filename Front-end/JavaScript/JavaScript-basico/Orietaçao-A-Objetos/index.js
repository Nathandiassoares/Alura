class Cliente {
    nome
    cpf
}
class contaCorrente {
    agencia
    _saldo = 0 //usando "_" "anderlane"/ "#" considera privado assim não podendo ser alterado fora da class apenas pela função.
    sacar(valor){ // função sacar para evitar saques acima do saldo na conta
        if(this._saldo >= valor){
         this._saldo -= valor   
         return valor 
        }
    }
  
    depositar(valor){ //função depositar,para evitar numeros negativos idesejados
        if(valor <= 0){
            return
        }
        this._saldo += valor 
    }
}

const cliente1 = new Cliente()
cliente1.nome    = 'Nathan'
cliente1.cpf     = 10000000001

const contaCorrenteNathan = new contaCorrente()
contaCorrenteNathan.agencia = 1001

contaCorrenteNathan.depositar(1000)
console.log(`Saldo ${contaCorrenteNathan._saldo}`)

const valorSacado = contaCorrenteNathan.sacar(100)
console.log(`Saldo ${contaCorrenteNathan._saldo}`)
console.log(`Valor sacado ${valorSacado}`)







