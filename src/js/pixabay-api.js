import { API_KEY, baseUrl } from './consts';

const getData = search => {
  search = search.lenght ? search : '';
  const opt = {
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return fetch(baseUrl + '?' + new URLSearchParams(opt));
};

export default getData;
