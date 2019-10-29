import images from '../data/images.js'; 
import htmlToDOM from '../util/html-to-DOM.js'; 
import renderImages from '../home/render-image.js';

const list = document.querySelector('.images'); 

const imageFilter = document.querySelector('.image-filter');

imageFilter.addEventListener('change', () => {

    const filter = imageFilter.value; 
    let filteredImages = null; 

    if (!filter) {
        filteredImages = images; 

    }
    
    else {

        filteredImages = images.filter(image => {
            

            return image.keyword === filter; 

        }); 

    }

    render(filteredImages); 

});

render(images); 

function render(imagesToRender) {
    while (list.lastElementChild){
        list.lastElementChild.remove(); 
    }



    imagesToRender.forEach(image => {
    
        const html = renderImages(image); 
        const dom = htmlToDOM(html); 
        list.appendChild(dom);   

    });
}
