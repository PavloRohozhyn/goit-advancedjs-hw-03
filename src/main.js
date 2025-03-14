import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getData from './js/pixabay-api';
import { render, showLoader } from './js/render-functions';

// remove loader
showLoader(false);

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  showLoader(true);
  document.querySelector('ul.gallery').innerHTML = ''; // clear content
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const main = document.querySelector('#loader');
  getData(formProps.search)
    .then(res => {
      if (!res.ok) {
        throw new Error('Server response fail');
      }
      return res.json();
    })
    .then(res => {
      main.innerHtml = render(res);
    })
    .catch(e => {
      console.log(e);
      showLoader(false);
    });
});
