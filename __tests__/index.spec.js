require("jest");

const testGetLines = require("./getLines.test").default;
const testGetRandomLines = require("./getRandomLines.test").default;

describe("testing all exposed functions", () => {
  test("getLines() function returns no error", () => {
    expect(() => {
      testGetLines();
    }).not.toThrow();
  });

  test("getRandomLines() function returns no error", () => {
    expect(() => {
      testGetRandomLines();
    }).not.toThrow();
  });
});
