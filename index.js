let array = require("./data/data.json");
let inspireArray = require("./data/inspire.json");

let favline = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getRandomLine = function () {
  let index = randomInt(0, array.length);
   switch(type){
    case 'isp' : 
        return inspireArray[index].line;
    default:
        return array[index].line;    
  }
};

module.exports.getLines = function () {
  let index = randomInt(0, array.length-1);
  switch(type){
    case "isp":
        console.log(index);
        favline.line = inspireArray[index].line;
        favline.book = inspireArray[index].book;
        favline.author = inspireArray[index].author;
        return favline;
    default:
        console.log(index);
        favline.line = array[index].line;
        favline.book = array[index].book;
        favline.author = array[index].author;    
        return favline;
  }
};
