import './styles.css';
import CountriesApiServ from './js/counttiesApi';
// import fetchCountries from './fetchCountries';
// import countryCardTempl from './templates/cauntry-card.hbs';
// import countriesListTempl from './templates/countries-list.hbs';
// import '@pnotify/core/dist/BrightTheme.css';
// import { error } from '@pnotify/core';
import { debounce } from "lodash";


// Тех.задание

// - Есть файл fetchCountries.js с дефолтным экспортом
//   функции fetchCountries(searchQuery), возвращающей промис
//   с массивом стран, результат запроса к API.

// - поиск данных по стране по ее частичному или полному
//   имени ендпоинт "/name", возвращающий массив стран
//   попавших под критерии поиска
// - название страны для поиска пользователь вводит в текст
//   поле
// - HTTP запросы происходят не по сабмиту формы,
//   ФОРМЫ НЕТ, а при наборе имени страны в инпуте
//   по событию ИНПУТ.HTTP запрос делаем тогда
//   когда пользователь перестал вводить текст
//   используем Debouns
// - Если бекенд вернул больше чем 10 - ть стран
//   то в интерфейсе отображается нотификация о
//   том что необходимо сделать запрос более специфичным
// - Если бекенд вернул от 2 - х до 10 - ти стран
//   под инпутом отображается список имён найденных стран
// - Если бекенд вернул массив из одной страны
//   в интерфейсе рендерится разметка с данными о стране:
//   название, cтолица, население, языки, флаг 
  
const refs = {
  input: document.querySelector('.search-input-js'),
}

const newCountyApi = new CountriesApiServ('.countries-box');

const searchCountry = function ({ target }) {
  newCountyApi.queryCountry = target.value;

  newCountyApi.fetchQueryCountries();
  
};

refs.input.addEventListener('input', debounce(searchCountry, 1000));
  


// const createMarkup = (data) => {
//   if (data.length === 1) {
//     const murkupString = countryCardTempl(data[0]);
//     refs.countriesBox.insertAdjacentHTML('beforeend', murkupString);
//   } else if (data.length >= 2 && data.length <= 10) {
//     const murkupString = countriesListTempl(data);
//     refs.countriesBox.insertAdjacentHTML('beforeend', murkupString);
//   }
// };

// const searchCountry = function ({ target }) {
//   const value = target.value;

//   // if (value === '' || value === Number) {
  
//   // }

//   fetchCountries(value)
//     .then(data => {
//       if (data.length > 10) {
//         throw new Error
//       }
//       createMarkup(data);
//     })
//     .catch(() => {
//       error({
//         text: "Too many matches found. Please enter a more specific query!",
//         hide: false,
//         styling: 'brighttheme'
//       });
      
//     })
// };