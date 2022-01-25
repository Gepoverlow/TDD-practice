function capitalize(string) {
  let trim = string.trim().toLowerCase();
  let capital = trim.slice(0, 1).toUpperCase();
  let capitalized = trim.replace(trim[0], capital);

  return capitalized;
}

module.exports = capitalize;
