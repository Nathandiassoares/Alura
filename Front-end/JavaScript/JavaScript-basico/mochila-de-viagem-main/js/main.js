const form = document.getElementById("novoItem")
const lista = document.getElementById("lista") // busacamos a tag pelo ID e adcionamos o elemento dentro com appChild
const itens = JSON.parse(localStorage.getItem("itens")) || [] // verificamos se a itens antes de adcionar algo dentro do array, e com "JSON parse" tranformamos os dados em codigo novamente

itens.forEach((element) => {
        criaElemento(element)
})



form.addEventListener("submit",(evento) => { //addevent cria um evento corespondente ao valor da teg subimit, o evento se refere para o que esta detron
    evento.preventDefault()//usando o prevdefault conseguimos manter do mesmo jeito que ele e(nao envia)

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    
    const existe = itens.find(elemento => elemento.value === nome.value)
    const itemAtual = {
            "nome": nome.value,
            "quantidade": quantidade.value
        }

        if(existe){
            itemAtual.id = existe.id

            atualizaElemento(itemAtual)

            itens[existe.id] = itemAtual
        }else {
            itemAtual.id = itens.length

            criaElemento(itemAtual)
            itens.push(itemAtual)
        }
       
    localStorage.setItem("item",JSON.stringify(itens))//JSON.stringfy e usado para tranforma nosso codigo/dados em string

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")//Cria um elemento/tag no HTML
    novoItem.classList.add("item") // Cria uma class com nome item no HTML

    const numeroItem = document.createElement('strong') //criamos uma variavel para conter um novo elemento
    
    numeroItem.innerHTML = item.quantidade //colocamos dentro do novo elemento a quantidade que esta sendo adquirida

    numeroItem.dataset.id = item.id
    
    novoItem.appendChild(numeroItem) // como o javascript cria um objeto precisamos tranforma ele em um elemento para usamos por isso o appdChid..
    novoItem.innerHTML  += item.nome

    lista.appendChild(novoItem) 
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}