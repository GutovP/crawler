const { Movie } = require('../models/movie.model');

const parseMovie = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.text();
    })
    .then((html) => {
      const movie = Movie.fromHtml(html);
      return movie;
    });
};

module.exports = { parseMovie };
