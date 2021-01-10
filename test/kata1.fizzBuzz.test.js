const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(6)).toBe("fizz");
    expect(fizzBuzz(9)).toBe("fizz");
    expect(fizzBuzz(12)).toBe("fizz");
    expect(fizzBuzz(27)).toBe("fizz");
    expect(fizzBuzz(198)).toBe("fizz");

  });
  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    
  });

  test("returns fizzBuzz when passed a multiple 3 and 5", () => {
    //expect(fizzBuzz(15)).toBe("fizzBuzz");
    expect(fizzBuzz(30)).toBe("fizzBuzz");
    expect(fizzBuzz(45)).toBe("fizzBuzz");
    expect(fizzBuzz(60)).toBe("fizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(463)).toBe(463);
  });
});
