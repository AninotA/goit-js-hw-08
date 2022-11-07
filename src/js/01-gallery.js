// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// console.log('Hello word');

const imgList = document.querySelector('.gallery');

const createMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class ="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
);

imgList.insertAdjacentHTML('beforeend', createMarkup.join(''));

let gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
  });
  
