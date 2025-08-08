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
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width="360" height="200" />
          </a>
          <ul class="image-stats">
            <li class="stat-item"><span class="stat-label">Likes:</span> ${likes}</li>
            <li class="stat-item"><span class="stat-label">Views:</span> ${views}</li>
            <li class="stat-item"><span class="stat-label">Comments:</span> ${comments}</li>
            <li class="stat-item"><span class="stat-label">Downloads:</span> ${downloads}</li>
          </ul>
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