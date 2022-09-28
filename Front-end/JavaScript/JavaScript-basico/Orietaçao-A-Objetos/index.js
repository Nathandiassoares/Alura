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

    transferir (valor, conta) {  //valor e conta são demostrativo não são variaveis
        const valorSacado = this.sacar(valor) // valor e demotrativo
        conta.depositar(valorSacado) // conta e demotrativo
    }//adcionamos o que queremos usar logo abaixo como sacando criando uma variavel para retirar o valor da conta que ira tranferir e logo abaixo depositar na conta que recebera o valor
    
}

const cliente01 = new Cliente()  //Adcionando novo cliente
cliente01.nome = 'Nathan'
cliente01.cpf = 333111


const cliente02 = new Cliente() //Adcionando novo cliente
cliente02.nome = 'Aline'
cliente02.cpf = 333222



const contaCorrenteAline = new contaCorrente()  //Nova conta corrente
contaCorrenteAline.cliente = cliente01
contaCorrenteAline.agencia = 101 

const contaCorrenteNathan = new contaCorrente() //Nova conta corrente
contaCorrenteNathan.cliente = cliente02
contaCorrenteNathan.agencia = 102



contaCorrenteAline.depositar(300)

console.log(contaCorrenteAline)

contaCorrenteAline.transferir(300,contaCorrenteNathan)



