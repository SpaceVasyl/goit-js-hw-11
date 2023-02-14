import { pixabayQuary, loadMore } from './fetch_utils.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const getEl = el => document.querySelector(el);

getEl('.search-form').addEventListener('submit', pixabayQuary);

getEl('.load-more').addEventListener('click', loadMore);

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});