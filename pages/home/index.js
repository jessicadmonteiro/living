import { buscarNoticias } from "../../script/api.js";

let arrPosts = JSON.parse(localStorage.news)

async function renderizarPosts(arr) {
    let containerReceberPosts = document.querySelector(".container_posts_home")
    containerReceberPosts.innerHTML = ""

    arr.forEach(element => {

        let imagem    = element.image
        let titulo    = element.title
        let descricao = element.description
        let id        = element.id

        let tagLi  = document.createElement("li")
        let tagImg = document.createElement("img")
        let tagH3  = document.createElement("h3")
        let tagP   = document.createElement("p")
        let tagBt  = document.createElement("button")

        tagLi.classList.add("container_post")
        tagImg.classList.add("img_post")
        tagH3.classList.add("titulo_post")
        tagP.classList.add("descricao_post")
        tagBt.classList.add("bt_posts")

        tagImg.src       = imagem
        tagH3.innerText  = titulo
        tagP.innerText   = descricao
        tagBt.id         = id
        tagBt.innerText  = "Acessar conteúdo"
        
        tagBt.addEventListener("click", () => {

            let salvarId = localStorage.setItem("postId", element.id)

            window.location.assign("/pages/post/index.html")

        } )

        tagLi.append(tagImg, tagH3, tagP, tagBt)

        containerReceberPosts.appendChild(tagLi)
       
    });

}
renderizarPosts(arrPosts)



function filtragemTodos () {
    let botao = document.querySelector("#todos")

    botao.addEventListener("click", () => {

        localStorage.removeItem("categoria")
       
       renderizarPosts(arrPosts)

    })
}
filtragemTodos ()

function filtragemPintura () {

    let botao = document.querySelector("#pintura")

    botao.addEventListener("click", () =>{

        localStorage.removeItem("categoria")

        renderizarPosts(arrPosts)
    })
}
filtragemPintura ()

function filtragemLimpeza () {

    let botao = document.querySelector("#limpeza")

    botao.addEventListener("click", () =>{

        localStorage.removeItem("categoria")

        renderizarPosts(arrPosts)
    })
}
filtragemLimpeza ()

function filtragemDecoracao () {
    let botao = document.querySelector("#decoracao")

    botao.addEventListener("click", () => {
       let novoArray = arrPosts.filter((element) =>{

        let categoria = element.category

        return categoria === "Decoração"
       })

       let categoria = novoArray.find((element) => {
        localStorage.setItem("categoria", JSON.stringify(element.category))
       })

       renderizarPosts(novoArray)

    })

}
filtragemDecoracao ()

function filtragemOrganizacao () {
    let botao = document.querySelector("#organizacao")

    botao.addEventListener("click", () => {
        localStorage.removeItem("categoriaDecoracao")

       let novoArray = arrPosts.filter((element) =>{

        let categoria = element.category

        return categoria === "Organização"
        })

        let categoria = novoArray.find((element) => {
            localStorage.setItem("categoria", JSON.stringify(element.category))
        })

       renderizarPosts(novoArray)

    })
}
filtragemOrganizacao ()

function filtragemSeguranca() {
    let botao = document.querySelector("#seguranca")

    botao.addEventListener("click", () => {
       let novoArray = arrPosts.filter((element) =>{

        let categoria = element.category
        return categoria === "Segurança"
       })

       let categoria = novoArray.find((element) => {
        localStorage.setItem("categoria", JSON.stringify(element.category))
       })

       renderizarPosts(novoArray)

    })
}
filtragemSeguranca()

function filtragemReforma() {
    let botao = document.querySelector("#reforma")

    botao.addEventListener("click", () => {
       let novoArray = arrPosts.filter((element) =>{

        let categoria = element.category
        return categoria === "Reforma"
       })

       let categoria = novoArray.find((element) => {
        localStorage.setItem("categoria", JSON.stringify(element.category))
       })

       renderizarPosts(novoArray)

    })
}
filtragemReforma()

function filtragemAroma() {
    let botao = document.querySelector("#aroma")

    botao.addEventListener("click", () => {
       let novoArray = arrPosts.filter((element) =>{

        let categoria = element.category
        return categoria === "Aromas"
       })

       let categoria = novoArray.find((element) => {
        localStorage.setItem("categoria", JSON.stringify(element.category))
       })

       renderizarPosts(novoArray)

    })
}
filtragemAroma()

