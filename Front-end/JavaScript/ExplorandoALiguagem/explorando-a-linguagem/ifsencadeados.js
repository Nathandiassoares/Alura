console.log("Requisito para descansar")
const harasEstudadas = 2
const exerciciosConcluido = 10
const commitEfetuado = true
const diaDaSemana = 3
const listaDeAnimesSegunda = new Array ('Boku no hero','haikyu','Jujutsu kaisen')
const listaDeAnimesTerça = new Array ('Naruto','Dungeo ni dei','96')

if (harasEstudadas >= 2 && exerciciosConcluido == 10) {
    console.log('Estudos cocluido hora do lazer')

} else if (commitEfetuado) {
    console.log('Alerta estudos pendente')
} else {
    console.log('Commit não efetuado')
}

if (diaDaSemana == 2){
    console.log(`${listaDeAnimesSegunda}`)
} else if (diaDaSemana == 3) {
    console.log(`${listaDeAnimesTerça}`) 
}
