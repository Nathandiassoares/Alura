const esconder = document.querySelector('#esconder')
const mostra = document.querySelector('#mostra')

esconder.addEventListener("click",(evento)=>{
   const lista = document.querySelector('.lista')
   lista.style.display = "none"
   
})
mostra.addEventListener("click",(evento)=>{
   const lista = document.querySelector('.lista')
  
   lista.style.display = "block"
   
})



