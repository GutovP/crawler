const { Genre } = require('../genre.model');
const initParser = require('../../dom-parser');

//static
Genre.fromHtml = (html) => {
  return initParser(html).then(($) => {
    const name = $('.article h1').html();
    const ids = [];
    $('h3.lister-item-header a').each((index, el) => {
      const href = $(el).attr('href');
      const id = href.substring('/title/'.length);
      ids.push(id);
    });

    return new Genre(name, ids);
  });
};
