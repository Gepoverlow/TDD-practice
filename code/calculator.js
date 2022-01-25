const calculator = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  divide: function divide(x, y) {
    return y === 0 ? null : x / y;
  },
  mulitply: function multiply(x, y) {
    return x * y;
  },
};

module.exports = calculator;
