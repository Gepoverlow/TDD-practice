const caesarCypher = require("../code/caesarCypher.js");

test("CaesarCypher Error 1", () => {
  expect(caesarCypher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("CaesarCypher Error 2", () => {
  expect(caesarCypher("defend. the- east? wall of the castle")).toBe(
    "efgfoe. uif- fbtu? xbmm pg uif dbtumf"
  );
});
