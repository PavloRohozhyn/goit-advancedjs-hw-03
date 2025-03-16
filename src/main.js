import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getData from './js/pixabay-api';
import { render, showLoader } from './js/render-functions';

// remove loader
showLoader(false);

document.querySelector('.search-form').addEventListener('submit', event => {
  event.preventDefault();
  showLoader(true);
  document.querySelector('ul.gallery').innerHTML = ''; // clear content
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const main = document.querySelector('span.loader');
  getData(formProps.search)
    .then(res => {
      if (res.status != 200) {
        throw new Error('Server response fail');
      }
      main.innerHtml = render(res.data);
    })
    .catch(e => {
      console.log(e);
      iziToast.error({
        message: e.message,
        position: 'topRight',
        timeout: 5000,
      });
      showLoader(false); // remove loader
    });
});
