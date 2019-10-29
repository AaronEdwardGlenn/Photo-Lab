import images from '../data/images.js'; 
import htmlToDOM from '../util/html-to-DOM.js'; 
import renderImages from '../home/render-image.js';

const list = document.querySelector('.images'); 


// let photo = document.getElementById('stag-photo'); 


images.forEach(image => {
    
    const html = renderImages(image); 
    const dom = htmlToDOM(html); 
    list.appendChild(dom);   


});