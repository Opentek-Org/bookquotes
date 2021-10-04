require("jest");

const testGetLines = require("./getLines.test").default;
const testGetLinesType = require("./getLinesType.test").default;
const testGetRandomLines = require("./getRandomLine.test").default;
const testGetRandomLinesType = require("./getRandomLineType.test").default;

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

  test("getRandomLines(<typeCode>) function returns no error", () => {
    expect(() => {
      testGetRandomLinesType("isp");
    }).not.toThrow();
  });

  test("getLines(<typeCode>) function returns no error", () => {
    expect(() => {
      testGetLinesType("isp");
    }).not.toThrow();
  });
});
