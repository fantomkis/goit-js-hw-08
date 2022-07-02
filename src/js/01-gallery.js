// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const blokGalleri = document.querySelector('.gallery');

const makeGalleri = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
  })
  .join('');

blokGalleri.insertAdjacentHTML('afterbegin', makeGalleri);

// blokGalleri.addEventListener('click', event => {
//   event.preventDefault();
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// });
