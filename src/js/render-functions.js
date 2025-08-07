import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags }) => {
      return `
        <li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width="360" height="200" />
          </a>
        </li>
      `;
    })
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'inline';
}

export function hideLoader() {
  loader.style.display = 'none';
}