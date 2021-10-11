![bookquotes](https://socialify.git.ci/Opentek-Org/bookquotes/image?description=1&font=Inter&forks=1&issues=1&language=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark)

# bookquotes

[![NPM VERSION](http://img.shields.io/npm/v/bookquotes.svg?style=flat&logo=npm)](https://www.npmjs.org/package/bookquotes) [![GitHub license](https://img.shields.io/github/license/Opentek-Org/bookquotes.svg?style=flat&logo=github)](https://github.com/Opentek-Org/bookquotes/blob/main/LICENSE) [![NPM MODULE](http://img.shields.io/badge/bookquotes-orange.svg?style=flat&logo=node.js)](https://github.com/Opentek-Org/bookquotes) [![npm collaborators](https://img.shields.io/npm/collaborators/bookquotes.svg?logo=npm)](https://www.npmjs.com/package/bookquotes) [![GitHub issues](https://img.shields.io/github/issues/Opentek-Org/bookquotes.svg?logo=github)](https://www.npmjs.com/package/bookquotes) [![npm downloads](https://img.shields.io/npm/dt/bookquotes.svg?style=flat-square)](https://www.npmjs.com/package/bookquotes)

#### A simple [NPM](https://www.npmjs.com/package/bookquotes) Package which returns

- random **Lines** from people's favorite book with names of the **author** as well as the **book** . It provides great and aesthetic quotes to display in your application.
- random **inspirational quotes**. Get your daily quote and stay motivated!

#### If you like to read books, literature and want to stay motivated and inspired, this [package](https://opentek-org.github.io/bookquotes/) is for you!

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

- **_getLines()_** method returns an object containing **_line_** , **_book_**, and **_author_**.

```json
{
  "line": "The gods grow jealous of too much contentment anywhere, and they show their displeasure all of a sudden.",
  "book": "Malgudi Days",
  "author": "R. K. Narayan"
}
```

- **_getRandomLine()_** method returns a random **aesthetic** line!

```js
const Line = require("bookquotes");

console.log(Line.getRandomLine()); // generates a single line

console.log(Line.getLines()); // generates an object having a line, name of book and author.
```

- **\_getRandomLine(**typeCode**)\_** method returns a specific **type** line.

```js
const Line = require("bookquotes");

console.log(Line.getRandomLine("isp")); // for inspiring quote

console.log(Line.getLine("isp"));
```

- **_Type codes_**

  ```
  'isp' = inspire
  ```

## Testing the package!

[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)

All the tests are in [tests](https://github.com/Opentek-Org/bookquotes/tree/main/__tests__) folder.

Run tests using ```npm test```

### Tip -
If you get an syntax error while running ```npm test``` then kindly check the ```data.json``` file if it is properly formatted. Then it should work fine.

## Want to contribute?

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/vinitshahdeo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/Opentek-Org/bookquotes/pulls)

> Please check issues **[here](https://github.com/Opentek-Org/bookquotes/issues)**!

**[Add Lines from your Favorite Books](https://github.com/Opentek-Org/bookquotes/issues/1)** (Recommended for beginners)

### Follow the JSON format and add your content(your favorite line from a book or an inspirational quote) in [data](https://github.com/Opentek-Org/bookquotes/tree/main/data) file.

> Please check HOW TO CONTRIBUTE **[here](CONTRIBUTING.md)**!

## License

[![GitHub license](https://img.shields.io/github/license/Opentek-Org/bookquotes.svg?style=social&logo=github)](https://github.com/Opentek-Org/bookquotes/blob/main/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/anirudhpandaaa.svg?style=social)](https://twitter.com/anirudhpandaaa) [![GitHub followers](https://img.shields.io/github/followers/AnirudhPanda.svg?label=Follow&style=social)](https://github.com/AnirudhPanda/)

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

Inspired by [this](https://github.com/vinitshahdeo/inspirational-quotes) project
