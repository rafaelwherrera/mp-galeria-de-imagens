import { images } from './dados.js'; // Importando o array de imagens do arquivo dados.js
const galleryContainer = document.querySelector('#gallery-container');  // Selecionando o container da galeria
const loadMoreButton = document.querySelector('#loadmore'); // Selecionando o botão "Carregar mais"

console.log(galleryContainer, loadMoreButton); // Verificando se os elementos foram selecionados corretamente


const imagesPerPages = 2;
let currentImagesIndex = 1;


function loadImages() {

    const pageImages = images.slice(currentImagesIndex, currentImagesIndex + imagesPerPages);
    console.log(pageImages);

    pageImages.forEach(images => {
        const gallertItem = document.createElement('div');
        gallertItem.className = `gallery-item ${images.wide ? 'wide' : ''}`;

        const imgItem = document.createElement('img');
        imgItem.src = images.src;
        imgItem.alt = images.alt;

        gallertItem.appendChild(imgItem); // Adicionando a imagem ao item da galeria
        galleryContainer.appendChild(gallertItem); // Adicionando o item da galeria ao container
    })

    currentImagesIndex += imagesPerPages;
    if(currentImagesIndex >= images.length) {
        loadMoreButton.style.display = 'none'; // Escondendo o botão "Carregar mais" se não houver mais imagens
    }
}
loadImages();
loadMoreButton.addEventListener('click', loadImages);
window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;
    const scrollPostion = window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const offset = pageHeight - 100;
    if (viewportHeight + scrollPostion >= offset) {
        loadImages();
    }

});
