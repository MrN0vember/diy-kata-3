const { joinNames } = require("../src");
const simpsons = [{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}];
const familyDogs = [{name: "Daisy"}, {name: "Darwin"}, {name: "Millie"}, {name: "Maddy"},{name: "Max"}];
describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toStrictEqual("Bart, Lisa & Maggie");
   expect(joinNames(familyDogs)).toStrictEqual("Daisy, Darwin, Millie, Maddy & Max");
  });
});
