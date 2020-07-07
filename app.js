require('./polyfills');

const { DETAILS } = require('./selectors');

//get the movies and add them to a queue
const genresUrlBase = 'https://www.imdb.com/search/title/?genres=';
const genres = ['action'];

//get a movie and get the movie data

const getMovieData = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.text();
    })
    .then((html) => {
      return require('./dom-parser')(html);
    })
    .then(($) => {
      const titleAndYear = $(DETAILS.TITLE_SELECTOR).html();
      const title = titleAndYear.substring(
        0,
        titleAndYear.indexOf('&nbsp;<span ')
      );
      const posterImgUrl = $(DETAILS.POSTER_IMG_URL).attr('src');
      console.log(title);
      console.log(posterImgUrl);
    });
};

getMovieData('https://www.imdb.com/title/tt4154756/?ref_=adv_li_tt');
getMovieData('https://www.imdb.com/title/tt0974015/?ref_=nm_flmg_act_7');
