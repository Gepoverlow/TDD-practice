const capitalize = require("../code/capitalize.js");

test("Capitalize Error 1", () => {
  expect(capitalize("     pedro    picapiedras     ")).toBe(
    "Pedro    picapiedras"
  );
});

test("Capitalize Error 2", () => {
  expect(capitalize("pedro picAPIEDRAS")).toBe("Pedro picapiedras");
});

test("Capitalize Error 3", () => {
  expect(capitalize("!$%pedro picapiedras%&/")).toBe("!$%pedro picapiedras%&/");
});
