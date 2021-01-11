const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44,10)).toBe("I should be there in 4.5 hours");
    expect(reachDestination(10,10)).toBe("I will be there in about 1 hour")
    expect(reachDestination(10,16)).toBe("I'm nearly there")
  });
});
