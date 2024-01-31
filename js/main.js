let elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
let elUrlShortenerResults = document.querySelector('.url-shortener__results');

elUrlShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elUrlShortenerResults.classList.add('url-shortener__results--open')
});