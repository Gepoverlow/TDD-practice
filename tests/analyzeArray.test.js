const analyzeArray = require("../code/analyzeArray.js");

test("AnalyzeArray Error Average", () => {
  expect(analyzeArray([1, 2, 4, 9, 10, 21, 2]).average).toBe(7);
});

test("AnalyzeArray Error Min", () => {
  expect(analyzeArray([1, 2, 4, 9, 10, 21, 2]).min).toBe(1);
});

test("AnalyzeArray Error Max", () => {
  expect(analyzeArray([1, 2, 4, 9, 10, 21, 2]).max).toBe(21);
});

test("AnalyzeArray Error Length", () => {
  expect(analyzeArray([1, 2, 4, 9, 10, 21, 2]).length).toBe(7);
});
