const conexao = "https://raw.githubusercontent.com/Nathandiassoares/Alura/main/Front-end/JavaScript/JavaScript/AluraPlayRequisicoesTesteNovoLink/db.json"

conectaApi()


async function conectaApi() {
    let conexaoConvertida = []
    const res = await fetch(conexao)
    conexaoConvertida = await res.json()
        

    const teste = conexaoConvertida
    console.log(teste)
    return
}
