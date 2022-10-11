function tocaSom (selectorAudio) {   
const elemento = document.querySelector(selectorAudio)

    if (elemento && elemento.localName === 'audio') {
            elemento.play()
        } else {
            console.log('Elemento não econtrado ou seletor invalido')
        } 
    
}
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0 
//para
for (let contador = 0 ;contador < listaDeTeclas.length; contador++) {
   const tecla = listaDeTeclas[contador]
   const instrumento = tecla.classList[1]
   //template string 
   const idAudio = `#som_${instrumento}`

   tecla.onclick = function () {
    tocaSom(idAudio)
   }
   tecla.onkeydown = function(evento) {
   
   
    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa')
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
   }

}

