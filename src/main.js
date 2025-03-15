import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input');

iziToast.info({
  title: 'Hello',
  message: 'Please enter a search query',
  position: 'center',
});

hideLoader();

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  console.log(query);

  if (!query) {
    console.log('Empty query detected');
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query correctly',
    });
    form.reset();

    clearGallery();
    return;
  }

  clearGallery();
  showLoader();
  console.log('Loader shown');

  fetchImages(query)
    .then(response => {
      const data = response.data;
      console.log(data);

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topLeft',
        });

        form.reset();
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
