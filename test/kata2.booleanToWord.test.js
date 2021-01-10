const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns yes when boolean is true and no when false", () => {
  expect(booleanToWord(true)).toBe("Yes")

  })
  test("returns no when boolean is false", () => {
    
    expect(booleanToWord(false)).toBe("No")
});
});