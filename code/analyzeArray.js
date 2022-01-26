function analyzeArray(array) {
  let arrayInfo = {
    average: calculateAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: getLength(array),
  };
  return arrayInfo;
}

function calculateAverage(array) {
  let total = array.reduce((a, b) => a + b);
  let average = total / array.length;
  return average;
}

function findMin(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array[0];
}

function findMax(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array[array.length - 1];
}

function getLength(array) {
  return array.length;
}

console.log(analyzeArray([1, 2, 4, 9, 10, 21, 2]).average);

module.exports = analyzeArray;
