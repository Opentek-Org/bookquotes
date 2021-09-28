let array = require("./data/data.json");

let favline = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getRandomLines = function () {
  let index = randomInt(0, array.length);
  return array[index].line;
};

module.exports.getLines = function () {
  let index = randomInt(0, array.length);
  favline.line = array[index].line;
  favline.book = array[index].book;
  favline.author = array[index].author;
  return favline;
};
