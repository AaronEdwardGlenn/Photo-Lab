
export default function renderImage(image){
    const html = /*html*/`

<li>

<div class = 'info-container'>
<h2>${image.name}</h2>
<p class = 'image-type'>${image.type}</p>
</div>

<div class = 'image-container'>
<img src = '${image.url}'>
</div>
<p class ="year"> ${image.year}</p>
</li>

`; 

    return html; 

} 