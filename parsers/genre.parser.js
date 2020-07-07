const { Genre } = require('../models/genre.model');

const parseGenre = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.text();
    })
    .then((html) => {
      const genre = Genre.fromHtml(html);
      return genre;
    });
};

module.exports = { parseGenre };
