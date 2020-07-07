require('./polyfills');

const genresUrlBase = 'https://www.imdb.com/search/title/?genres=';
const genres = [
  'action',
  'animation',
  'fantasy',
  'comedy',
  'romance',
  'drama',
  'horror',
  'adventure',
];

require('./models/extentions');

const { parseGenre } = require('./parsers/genre.parser');

const moviesIds = [];

Promise.all(
  genres.map((genre) => {
    const url = genresUrlBase + genre;
    return parseGenre(url).then((genre) => {
      moviesIds.push(...genre.moviesIds);
    });
  })
).then(() => {
  console.log(moviesIds);
});

/* Promise.all([
  getMovieData('https://www.imdb.com/title/tt4154756/?ref_=adv_li_tt'),
  getMovieData('https://www.imdb.com/title/tt0974015/?ref_=nm_flmg_act_7'),
]).then(([m1, m2]) => {
  console.log(m1);
  console.log(m2);
}); */
