# bookquotes

[![NPM VERSION](http://img.shields.io/npm/v/bookquotes.svg?style=flat&logo=npm)](https://www.npmjs.org/package/bookquotes) [![GitHub license](https://img.shields.io/github/license/Opentek-Org/bookquotes.svg?style=flat&logo=github)](https://github.com/Opentek-Org/bookquotes/blob/main/LICENSE) [![NPM MODULE](http://img.shields.io/badge/bookquotes-orange.svg?style=flat&logo=node.js)](https://github.com/Opentek-Org/bookquotes) [![npm collaborators](https://img.shields.io/npm/collaborators/bookquotes.svg?logo=npm)](https://www.npmjs.com/package/bookquotes) [![GitHub issues](https://img.shields.io/github/issues/Opentek-Org/bookquotes.svg?logo=github)](https://www.npmjs.com/package/bookquotes)

#### A simple [NPM](https://www.npmjs.com/package/bookquotes) Package which returns random **Lines** from people's favorite book with names of the **author** as well as the **book** . It provides great and aesthetic quotes to display in your application.
#### If you like to read books or literature this [package](https://opentek-org.github.io/bookquotes/) is for you!

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Opentek-Org/bookquotes.svg?logo=github&style=social)](https://www.npmjs.com/package/bookquotes) [![npm](https://img.shields.io/npm/dy/bookquotes.svg?logo=npm&style=social)](https://www.npmjs.com/package/bookquotes) [![GitHub top language](https://img.shields.io/github/languages/top/Opentek-Org/bookquotes.svg?logo=javascript&logoColor=yellow&style=social)]() 

**Click [here](https://www.npmjs.com/package/bookquotes)** to view this package on **NPM** registry. Check the homepage **[here](https://opentek-org.github.io/bookquotes/)**.

## Getting started

[![NPM](https://nodei.co/npm/bookquotes.png?compact=true)](https://nodei.co/npm/bookquotes/)

```
$ npm install --save bookquotes
```

## Installation

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)](https://nodejs.org/en/) [![inspirational-quotes](http://img.shields.io/badge/npm-bookquotes-red.svg?style=flat&logo=npm)](https://www.npmjs.com/package/inspirational-quotes)


This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm install bookquotes
```

## Usage

 [![usage](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://github.com/Opentek-Org/bookquotes/)

- ***getLines()*** method returns an object containing ***line*** , ***book***, and ***author***.

```json
{
  "line": "The gods grow jealous of too much contentment anywhere, and they show their displeasure all of a sudden.",
  "book": "Malgudi Days",
  "author": "R. K. Narayan"
}
 ```
 
 

- ***getRandomLine()*** method returns a random **aesthetic** line!



```js

const Line = require("bookquotes");

console.log(Line.getRandomLine()); // generates a single line

console.log(Line.getLines()); // generates an object having a line, name of book and author.

```
- ***testing*** the package!

```js
const favline = require("./index.js");

var myLine = favline.getLines();

console.log("*********************************");
console.log("WE ARE GRAMMAR_NAZIS\n");
console.log("*********************************");

console.log("The lines I love- " + myLine.line);
console.log("Written by - " + myLine.author);
console.log("From the book - " + myLine.book);
```

## Want to contribute?

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/vinitshahdeo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/Opentek-Org/bookquotes/pulls)

> Please check issues **[here](https://github.com/Opentek-Org/bookquotes/issues)**!

 **[Add Lines from your Favorite Books](https://github.com/Opentek-Org/bookquotes/issues/1)** (Recommended for beginners)

 ### Follow the JSON format and add your content in [data](https://github.com/Opentek-Org/bookquotes/blob/main/data/data.json) file.

> Please check HOW TO CONTRIBUTE **[here](CONTRIBUTING.md)**!

## License


[![GitHub license](https://img.shields.io/github/license/Opentek-Org/bookquotes.svg?style=social&logo=github)](https://github.com/Opentek-Org/bookquotes/blob/main/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/anirudhpandaaa.svg?style=social)](https://twitter.com/anirudhpandaaa) [![GitHub followers](https://img.shields.io/github/followers/AnirudhPanda.svg?label=Follow&style=social)](https://github.com/AnirudhPanda/)

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

Inspired by [this](https://github.com/vinitshahdeo/inspirational-quotes) project