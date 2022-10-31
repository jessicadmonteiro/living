export async function buscarNoticias () {
    let baseUrl = fetch ("https://m2-api-living.herokuapp.com/news", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    .then (res => res.json())
    .then (res => {
        console.log(res.news)

       let news =  localStorage.setItem("news",JSON.stringify(res.news))
       
       
    })
}

buscarNoticias () 
