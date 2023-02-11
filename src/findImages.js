import Notiflix from "notiflix";
import axios from "axios";
const ENDPOINT = ""

export function findImages (query){
    return fetch(`${ENDPOINT}/name/${query}`)
    .then((res)=> res.json())
    .catch((error)=> Notiflix.Notify.error("Oops, there is no photo with that name"));
}

