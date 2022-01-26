let alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCypher(string) {
  return numbersToString(stringToNumbers(string));
}

function isLetter(letter) {
  return letter.toUpperCase() != letter.toLowerCase() ? true : false;
}

function isNumber(number) {
  return typeof number === "number" ? true : false;
}

function stringToNumbers(string) {
  let result = [];

  string = string
    .replace(/\W*\d+/g, "")
    .toLowerCase()
    .split("");

  for (let i = 0; i < string.length; i++) {
    isLetter(string[i])
      ? result.push(alphabet.indexOf(string[i]) + 1)
      : result.push(string[i]);
  }

  return result;
}

function numbersToString(number) {
  let result = [];

  for (let i = 0; i < number.length; i++) {
    if (isNumber(number[i]) && number[i] !== 26) {
      result.push(alphabet[number[i]]);
    } else if (number[i] === 26) {
      result.push(alphabet[0]);
    } else {
      result.push(number[i]);
    }
  }

  return result.join("");
}

module.exports = caesarCypher;
