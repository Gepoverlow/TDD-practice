const calculator = require("../code/calculator.js");

test("Calculator Error Add", () => {
  expect(calculator.add(2, 10)).toBe(12);
});

test("Calculator Error Subtract", () => {
  expect(calculator.subtract(2, 10)).toBe(-8);
});

test("Calculator Error Divide", () => {
  expect(calculator.divide(2, 10)).toBe(0.2);
});

test("Calculator Error Divide BY 0", () => {
  expect(calculator.divide(10, 0)).toBe(null);
});

test("Calculator Error Mulitply", () => {
  expect(calculator.mulitply(2, 10)).toBe(20);
});
