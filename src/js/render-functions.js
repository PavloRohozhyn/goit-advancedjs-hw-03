import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const render = data => {
  if (data && data.total > 0) {
    showLoader(false);

    console.log(data);
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = data.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          // likes,
          // views,
          // comments,
          // downloads,
        }) => `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
                width="350"
                height="290"
            />
            </a>
          </li>`
      )
      .join('');

    // include slider
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt', // Use the alt attribute of images for captions
      captionDelay: 250, // Delay in milliseconds before showing the caption
    });
  } else {
    console.log('no data yet');
  }
};

const showLoader = (flag = true) => {
  const el = document.querySelector('div#result');
  flag ? el.classList.add('loader') : el.classList.remove('loader');
};

export { render, showLoader };
