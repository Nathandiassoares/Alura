const form = document.getElementById("novoItem")
const lista = document.getElementById("lista") // busacamos a tag pelo ID e adcionamos o elemento dentro com appChild

form.addEventListener("submit",(evento) => { //addevent cria um evento corespondente ao valor da teg subimit, o evento se refere para o que esta detron
    
    evento.preventDefault()//usando o prevdefault conseguimos manter do mesmo jeito que ele e(nao envia)

    criaElemento(evento.target.elements['nome'].value,evento.target.elements['quantidade'].value) //target acessa o que tem dentro do elemento
})

function criaElemento(nome,quantidade) {
    const novoItem = document.createElement('li')//Cria um elemento/tag no HTML
    novoItem.classList.add("item") // Cria uma class com nome item no HTML

    const numeroItem = document.createElement('strong') //criamos uma variavel para conter um novo elemento
    numeroItem.innerHTML = quantidade //colocamos dentro do novo elemento a quantidade que esta sendo adquirida
    
    novoItem.appendChild(numeroItem) // como o javascript cria um objeto precisamos tranforma ele em um elemento para usamos por isso o appdChid..
    novoItem.innerHTML  += nome

    lista.appendChild(novoItem) 
}