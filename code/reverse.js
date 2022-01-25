function reverse(string) {
  let split = string.split("");
  let reverse = split.reverse();
  let joined = reverse.join("");

  return joined;
}

module.exports = reverse;
