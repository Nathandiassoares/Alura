console.log('Trabalhando com condicionais')

const listaDeDestino = new Array (

    'Salvador','baiha','sao paulo'
)

const idadeComprador = 10

if (idadeComprador >= 18) {
    console.log('Maior de idade --lista liberada--')
    listaDeDestino.splice(1,1) //Deletando elemento utilizando o --SPLICE--
    console.log(listaDeDestino) 
} else {
    console.log('Comprador Menor de idade --lista Indiponivel--')
}




