function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById
("campo-pesquisa").value

// se o campoPesquisa for uma string sem nada
if (campoPesquisa == "" ){
    
return
}

if (campoPesquisa == " ") {
   
    return
}


 if (campoPesquisa == "febre"){

    return
 }

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";


// para cada dado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) 
// cria um novo elemento
        resultados += `<div class="item-resultado">
            <h2><a href=${dado.link} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>.
        </div>`
        ;

    }
    
    
    

    section.innerHTML = resultados;
}