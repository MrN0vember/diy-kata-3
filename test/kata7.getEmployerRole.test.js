const { getEmployerRole } = require("../src");
const employees = [{name: "Gandalf", role: "Wizzard"},{name: "Aragorn", role: "Ranger of the North"},{name: "Gimli", role:"Dwarf Warrior"}, {name: "Sauron", role: "The Dark Lord of Mordor"}];

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Gadalf", employees)).toEqual("Wizzard");
    expect(getEmployerRole("Aragorn", employees)).toEqual("Ranger of the North")
    expect(getEmployerRole("Sauron", employees)).toEqual("The Dark Lord of Mordor"); 
    expect(getEmployerRole("Gimli", employees)).toEqual("Dwarf Warrior"); 
  });
});
