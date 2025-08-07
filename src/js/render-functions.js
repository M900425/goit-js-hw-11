import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.createElement('div');
galleryContainer.classList.add('gallery');

document.querySelector('main').appendChild(galleryContainer);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags }) => {
      return `
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
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
  galleryContainer.classList.add('loading');
}

export function hideLoader() {
  galleryContainer.classList.remove('loading');
}