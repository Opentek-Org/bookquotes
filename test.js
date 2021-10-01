const favline = require("./index.js");

let myLine = favline.getLines();
let inspireLine = favline.getLines('isp');

console.log("*********************************");
console.log("WE ARE GRAMMAR_NAZIS\n");
console.log("*********************************");

console.log("The lines I love- " + myLine.line);
console.log("Written by - " + myLine.author);
console.log("From the book - " + myLine.book);

console.log("The lines which motivates me- " + inspireLine.line);
console.log("Written by - " + inspireLine.author);
console.log("From the book - " + inspireLine.book);