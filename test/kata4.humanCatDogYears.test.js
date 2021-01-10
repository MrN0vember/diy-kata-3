const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("Returns an array of three numbers, human, cat & dog when passed a number representing human years", () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
        expect(humanCatDogYears(16)).toStrictEqual([16,80,94]);
        expect(humanCatDogYears(31)).toStrictEqual([31,140,169]);
        expect(humanCatDogYears(2)).toStrictEqual([2,24,24]);
        expect(humanCatDogYears(1)).toStrictEqual([1,15,15]);
        expect(humanCatDogYears(0)).toStrictEqual([0,0,0]);
    });
    

});
