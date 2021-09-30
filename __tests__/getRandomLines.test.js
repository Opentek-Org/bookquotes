const testGetRandomLines = () => {
  const favline = require("../index.js");

  var myLine = favline.getRandomLines();

  console.log("*********************************");
  console.log("WE ARE GRAMMAR_NAZIS\n");
  console.log("*********************************");

  console.log("A random line I love- " + myLine);
};

exports.default = testGetRandomLines;
