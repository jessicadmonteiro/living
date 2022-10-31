let arrPosts = JSON.parse(localStorage.news)

let id = localStorage.postId

let novoArray = arrPosts.filter((elemento) => {
    return elemento.id === id
})


function renderizarPostPeloId (arr) {
    const containerPost = document.querySelector(".container_post")
    containerPost.innerHTML = ""

    arr.forEach(element => {
        let imagem    = element.image
        let titulo    = element.title
        let descricao = element.description
        let conteudo  = element.content
        let id        = element.id

        let tagDivContainer = document.createElement("div")
        let tagH2 = document.createElement("h2")
        let tagPDescricao = document.createElement("p")
        let tagDiv = document.createElement("div")
        let tagImg = document.createElement("img")
        let tagPConteudo = document.createElement("p")

        tagDivContainer.classList.add("container")
        tagH2.classList.add("titulo")
        tagPDescricao.classList.add("texto_descricao")
        tagImg.classList.add("img_post")
        tagPConteudo.classList.add("texto_conteudo")

        tagH2.innerText = titulo
        tagPDescricao.innerText = descricao
        tagImg.src = imagem
        tagPConteudo.innerText = conteudo

        tagDivContainer.append(tagH2, tagPDescricao)
        tagDiv.append(tagImg, tagPConteudo)

        containerPost.append(tagDivContainer, tagDiv)
        return containerPost

    });
}
renderizarPostPeloId (novoArray)
