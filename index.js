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
    viewed[index] = 1; //Add the generated index to hashtable and to mark that generated index as used
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

    let index = randomInt(0, array.length); //generates new random index
    let cnt = Number(array.length); //counter is used here size= array size
    while (!viewed[index] && cnt >= 0) {
        //O(1) search
        //this loop will most likey to run only once 
        // but if the generated index is already used once it might run more then once
        // When it run more then once it generates new index and checks with the hashtable if it was previously generated or not
        // if yes then generates new index again and if not the loop exits
        // And this loop will not run infinitely , rather only till number of elements 
        index = randomInt(0, array.length);
        cnt--; //here counter value is decremented by one for each new index generation
    }
    //this if condition just checks that if we have generated all the index from array then it generates new random index as default  
    if (cnt < 0) {
        index = randomInt(0, array.length);
    }
    viewed[index] = 1; //to mark that generated index as used
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