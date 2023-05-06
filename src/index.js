import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

inputEl.addEventListener(
  'input',
  debounce(e => {
    const inputValue = e.target.value.trim();
    fetchCountries(inputValue);
  }, DEBOUNCE_DELAY)
);
