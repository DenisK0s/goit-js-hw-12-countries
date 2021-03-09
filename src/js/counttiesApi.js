import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';
import countryCardTempl from '../templates/cauntry-card.hbs';
import countriesListTempl from '../templates/countries-list.hbs';
import { alert, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

console.log(defaults);


export default class CountriesApiServ {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this._searchQuery = '';
    this.countries = [];
  }

  get queryCountry () {
    return this._searchQuery;
  }

  set queryCountry(newQuery) {

    this._searchQuery = newQuery;
  }

  fetchQueryCountries() {
    this.clear();
    fetchCountries(this._searchQuery)
      .then(data => {
      console.log(data);
      if (data.length > 10) {
        throw new Error
        }
      this.render(data);
    })
      .catch((e) => {
      error({
        text: "Too many matches found. Please enter a more specific query!"
      });
    })
  }

  render (countries) {
    if (countries.length === 1) {
      const murkupString = countryCardTempl(countries[0]);
      this.element.insertAdjacentHTML('beforeend', murkupString);
    } else if (countries.length >= 2 && countries.length <= 10) {
      const murkupString = countriesListTempl(countries);
      this.element.insertAdjacentHTML('beforeend', murkupString);
    }
  }

  clear() {
    this.element.innerHTML = '';
  }

}
