function caesarCypher(string) {
  return numbersToString(stringToNumbers(string));
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";

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
    isNumber(number[i])
      ? result.push(alphabet[number[i]])
      : result.push(number[i]);
  }

  return result.join("");
}

module.exports = caesarCypher;
