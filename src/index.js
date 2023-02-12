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
    findImages(inputPhoto).then((r)=>createMarkup(r)).catch((error)=>console.log(error))
}

function createMarkup(r){
    console.log(r);
    photoGallery.innerHTML = r.map((a)=>{
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = a;
    console.log(webformatURL);
})
}
//     return `
//     <div class="photo-card">
//   <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       ${likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       ${views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       ${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       ${downloads}
//     </p>
//   </div>
// </div>
//     `