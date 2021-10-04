let array = require("./data/data.json");
let inspireArray = require("./data/inspire.json");
let viewed = new Array(array.length); //hashtable


function initialize() {
    //call this function before using the getNewRandomLine()
    viewed.fill(0, 0);
}
let favline = {};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports.getRandomLine = function(type) {
    let index = randomInt(0, array.length);
    viewed[index] = 1;
    switch (type) {
        case "isp":
            index = randomInt(0, inspireArray.length);
            return inspireArray[index].line;
        default:
            return array[index].line;
    }
};
module.exports.getNewRandomLine = function() {
    //new function to know which line was prevoiulsy generated and to not generate it again this time

    let index = randomInt(0, array.length);
    let cnt = Number(array.length);
    while (!viewed[index] && cnt >= 0) {
        //O(1) search
        index = randomInt(0, array.length);
        cnt--;
    }
    if (cnt < 0) {
        index = randomInt(0, array.length);
    }
    viewed[index] = 1;
    return array[index].line;
};

module.exports.getLines = function(type) {
    let index = randomInt(0, array.length);
    switch (type) {
        case "isp":
            index = randomInt(0, inspireArray.length);
            favline.line = inspireArray[index].line;
            favline.book = inspireArray[index].book;
            favline.author = inspireArray[index].author;
            return favline;
        default:
            favline.line = array[index].line;
            favline.book = array[index].book;
            favline.author = array[index].author;
            return favline;
    }
};