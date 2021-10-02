let array = require("./data/data.json");
let viewed = new Array(array.length); //hashtable

let favline = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports.getRandomLine = function () {
  let index = randomInt(0, array.length);
  viewed[index] = 1;
  return array[index].line;
};

module.exports.getNewRandomLine = function () {
  //new function to know which line was prevoiulsy generated and to not generate it again this time

  let index = randomInt(0, array.length);
  let cnt = Number(array.length);
  while (!viewed[index] && cnt >= 0) {
    //O(1) search
    index = randomInt(0, array.length);
    cnt--;
  }
  return array[index].line;
};

module.exports.getLines = function () {
  let index = randomInt(0, array.length);
  favline.line = array[index].line;
  favline.book = array[index].book;
  favline.author = array[index].author;
  return favline;
};
