const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = 'ad3c52c6d134355a40d11999e3a58e27';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';

function carregaFilmes (){
    let xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + API_KEY);
    xhr.onload = exibeFilmes;
    xhr.send();
}


function pesquisaFilmes (){

  event.preventDefault();
    let xhr = new XMLHttpRequest ();

    let query = document.getElementById ('inputPesquisa').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie?api_key=' + API_KEY + '&query=' + query);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function exibeFilmes (evt) {
    let textoHTML = '';

    let filmes = JSON.parse (evt.target.responseText);


    for (let i = 0; i < filmes.results.length - 14; i++) {
        let titulo = filmes.results[i].title;
        let sinopse = filmes.results[i].overview;
        let nota = filmes.results[i].vote_average;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;
        let filmeId = filmes.results[i].id
        let linkDoFilme = `https://www.themoviedb.org/movie/` + filmeId 

        

        textoHTML += `<div class="card col-12 col-sm-4 col-lg-3" style="margin:10px; padding:10px; background-color: #c00f0f; color: white ">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${sinopse}</p>
                <p>Nota média: ${nota}</p>
                <a href="${linkDoFilme}" class="btn btn-primary" style="background-color: #121214;">Exibir Informações</a>
            </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;

}

