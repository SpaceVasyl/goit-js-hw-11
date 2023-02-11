import Notiflix from "notiflix";
import axios from "axios";
import {findImages} from './findImages';
const form = document.querySelector('#search-form');
const submit = document.querySelector('#submit');
const DEBOUNCE_DELAY = 300;

submit.addEventListener("input", searchPhoto);
function searchPhoto(e){
    e.preventDefault();
    const inputPhoto = form.value;
    if(!inputPhoto){
        return;
    }
    findImages(inputPhoto).then((c)=>createMarkup(c))
}

function createMarkup(c){
    console.log(c);
}