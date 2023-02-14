import Notiflix from "notiflix";
import axios from "axios";
import {findImages} from './findImages';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const form = document.querySelector('#search-form');
const submit = document.querySelector('#submit');
const photoGallery = document.querySelector('.gallery');
const DEBOUNCE_DELAY = 300;

form.addEventListener("submit", searchPhoto);
function searchPhoto(e){
    e.preventDefault();
    const inputPhoto = e.target[0].value;
    if(!inputPhoto){
        return;
    }
    findImages(inputPhoto).then((r)=>createMarkup(r)).catch((error)=>console.log(error))
}

function createMarkup(r){
    
    console.log(r);
    photoGallery.innerHTML = r.hits.map((a)=>{
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = a;
    console.log(webformatURL);
    return `
    <div class="photo-card">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" width='280'/></a>
<div class="info">
<p class="info-item">
<b>Likes</b>
<span>${likes}</span></p>
<p class="info-item">
 <b>Views</b>
 <span>${views}</span></p>
 <p class="info-item">
 <b>Comments</b>
 <span>${comments}</span></p>
 <p class="info-item">
<b>Downloads</b>
<span>${downloads}</span></p>
</div>
 </div>
     `
}).join('')
}

const lightbox = new SimpleLightbox(".gallery", { captionsData: "alt" , captionDelay: 250} );
