import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');

function createMarkupForList(arr) {
  const newListCountry = arr.map(listElem => {
    return `<li><img src="${listElem.flags.png}" alt="${listElem.flags.alt}" /> <span>${listElem.name.common}</span></li>`;
  });
}

inputEl.addEventListener(
  'input',
  debounce(e => {
    const inputValue = e.target.value.trim();
    fetchCountries(inputValue)
      .then(data => {
        if (2 > data.length < 10) {
          const markupList = createMarkupForList(data);
          listEl.insertAdjacentHTML('afterbegin', markupList);
          return data;
        }
      })
      .then(console.log)
      .catch(error => {
        console.log(error);
      });
  }, DEBOUNCE_DELAY)
);
