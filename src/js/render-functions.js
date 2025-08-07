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
          <img src="${webformatURL}" alt="${tags}" width="360" height="200" />
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
  const loaderText = document.createElement('p');
  loaderText.textContent = 'Loading images, please wait...';
  loaderText.classList.add('loader-text');
  galleryContainer.appendChild(loaderText);
}

export function hideLoader() {
  const loaderText = galleryContainer.querySelector('.loader-text');
  if (loaderText) {
    galleryContainer.removeChild(loaderText);
  }
}