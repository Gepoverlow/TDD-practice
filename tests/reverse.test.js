const reverse = require("../code/reverse.js");

test("Reverse Error 1", () => {
  expect(reverse("pedro picapiedras")).toBe("sardeipacip ordep");
});

test("Reverse Error 2", () => {
  expect(reverse("saltamontes")).toBe("setnomatlas");
});

test("Reverse Error 3", () => {
  expect(reverse("123·$%&")).toBe("&%$·321");
});
