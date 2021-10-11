let array = require("./data/data.json");
let inspireArray = require("./data/inspire.json");

let favline = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports.getRandomLine = function (type) {
  let index = randomInt(0, array.length);
  switch (type) {
    case "isp":
      index = randomInt(0, inspireArray.length);
      return inspireArray[index].quote;
    default:
      return array[index].line;
  }
};

module.exports.getLines = function (type) {
  let index = randomInt(0, array.length);
  switch (type) {
    case "isp":
      index = randomInt(0, inspireArray.length);
      favline.quote = inspireArray[index].quote;
      favline.author = inspireArray[index].author;
      return favline;
    default:
      favline.line = array[index].line;
      favline.book = array[index].book;
      favline.author = array[index].author;
      return favline;
  }
};
