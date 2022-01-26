const caesarCypher = require("../code/caesarCypher.js");

test("CaesarCypher Error Standard", () => {
  expect(caesarCypher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("CaesarCypher Error Punctuation and Spaces", () => {
  expect(caesarCypher("defend. the- east? wall of the  castle")).toBe(
    "efgfoe. uif- fbtu? xbmm pg uif  dbtumf"
  );
});

test("CaesarCypher Error Accepts Z's into A's", () => {
  expect(caesarCypher("zzzzilence!")).toBe("aaaajmfodf!");
});
