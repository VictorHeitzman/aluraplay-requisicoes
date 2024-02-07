import { conectaAPI } from "./conectaAPI.js";
import { functions } from "./mostrarVideos.js"


async function buscarVideo(evento){

    evento.preventDefault();
    const dadosBuscaPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosBuscaPesquisa);

    const lista = document.querySelector('[data-lista]');

    while( lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    console.log(busca)
    busca.forEach(elemento => lista.appendChild(functions.constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não encontrado</h2>`
    }

}

const botaoDePesqusia = document.querySelector("[data-botao-pesquisa]");

botaoDePesqusia.addEventListener("click", evento => buscarVideo(evento))