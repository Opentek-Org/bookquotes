const favLine = require("./index.js");

var myLine = favLine.getLines();

console.log("*********************************");
console.log("WE ARE GRAMMAR_NAZIS\n");
console.log("*********************************");

console.log("The lines I love- " + myLine.line);
console.log("Written by - " + myLine.author);
console.log("From the book - " + myLine.book);
