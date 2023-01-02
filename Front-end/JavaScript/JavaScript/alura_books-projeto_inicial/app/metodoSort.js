let btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenaPorPreco.addEventListener('click',ordenaLivrosPorPreco)

function ordenaLivrosPorPreco() {
   let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
   exibirOsLivrosNaTela(livrosOrdenados)
}