const numeroDaSorte = [10,200,1,2,3,7]
const numeroDeAzar = [13,100,4,6,8,34]

const juntar = numeroDaSorte.concat(numeroDeAzar)
console.log(juntar)

const exibir = juntar.pop() 
console.log(exibir)
console.log(juntar)

const adcionarNumeroNoArray = juntar.push(10)
console.log(adcionarNumeroNoArray)
console.log(juntar)

const verificarSeNumeroExisteNoArray = juntar.includes(10)
console.log(verificarSeNumeroExisteNoArray)

const alterarNumerosAPartiDaposicao = juntar.fill(20,11)
console.log(alterarNumerosAPartiDaposicao)

const verificarNumeroExitente = juntar.indexOf(10)
console.log(verificarNumeroExitente) // retorna a posição que o elemento se encontra caso não encontra retorna -1

const nomeReverse = ['data','nathan','joao','soares']
nomeReverse.reverse()
console.log(nomeReverse)

const selecionandoPorPosiçãoAteOutra =nomeReverse.slice(0,3)
console.log(selecionandoPorPosiçãoAteOutra)

const array = [1,10,20,122,13]
console.log(array)

const evento =(elemento) => elemento % 1===0
console.log(array.some(evento))

const adcionarTraco = array.join()
console.log(adcionarTraco)

array.shift()
console.log(array)

array.unshift('nathan')
console.log(array)

console.log(array.length)

array.sort()
console.log(array)

const separandoPorVirgula = array.toString()
console.log(separandoPorVirgula)

const exibirNome = array.findIndex(nathan => nathan === 'nathan')
console.log(exibirNome)

const procuraNumeroExibir = array.find(numero => numero ===  10)
console.log(procuraNumeroExibir)

const eUmArray = Array.isArray(array)
console.log(eUmArray)

const nathanEverdadeiro = array.every( nome => nome === 10, 122, 13, 20, 'nathan')
console.log(nathanEverdadeiro)

const numerosAleaotios = [10,20,19,199,200]

const num = numerosAleaotios.filter(vinte => vinte == 20)
console.log(num)

const somaMaisDez = numerosAleaotios.map(num => num + 10)
console.log(somaMaisDez)

numerosAleaotios.forEach((element) => console.log(element))

const trocarPosicao = numerosAleaotios.copyWithin(0,2)
console.log(trocarPosicao)













