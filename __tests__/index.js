require("jest");

const testGetLines = require("./getLines.test").default;

test("getLines() function returns no error", () => {
  expect(() => {
    testGetLines();
  }).not.toThrow();
});
