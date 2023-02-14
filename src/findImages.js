import Notiflix from "notiflix";
import axios from "axios";
const ENDPOINT = "https://pixabay.com/api/?key=33515519-4cabbaba1f47ec33da2852d88";


export function findImages (query){
    return fetch(`${ENDPOINT}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`)
    .then((res)=> res.json())
    .catch((error)=> Notiflix.Notify.error("Oops, there is no photo with that name"));
}

