
export default function renderImage(image){
    const html = /*html*/`

<li>

<div class = 'info-container'>
<h2>${image.title}</h2>
<p class = 'image-type'>${image.description}</p>
</div>

<div class = 'image-container'>
<img src = '${image.url}'>
</div>
<p class ="horns">Number of horns: ${image.horns}</p>
</li>

`; 

    return html; 

} 