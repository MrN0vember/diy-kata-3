const humanCatDogYears = number => {
    const catYears = calculateAge(number, "Cat");
    const dogYears = calculateAge(number, "Dog");
    return [number, catYears,dogYears];
};

function calculateAge(humanAge, animalType) {
    if(humanAge === 0) return 0;
    if(humanAge === 1) return 15;
    if (animalType === "Cat") return 24 + ((humanAge - 2) * 4);
    if (animalType === "Dog") return 24 + ((humanAge - 2) * 5);
};

module.exports = humanCatDogYears;
