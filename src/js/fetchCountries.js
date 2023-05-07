import Notiflix from 'notiflix';

export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  const END_POINT = '/name';
  const PARAMS = `/${name}?fields=name,capital,population,flags,languages`;
  let url = BASE_URL + END_POINT + PARAMS;
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
      return res.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        return data;
      }
    });
}
