import Notiflix from "notiflix";
import axios from "axios";
import {findImages} from './findImages';
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
    findImages(inputPhoto).then((c)=>createMarkup(c))
}

function createMarkup(c){
    console.log(c);
    photoGallery.innerHTML = c.map((a)=>{
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = a;
    return `
    <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>
    `
})

    console.log(c.largeImageURL);
}