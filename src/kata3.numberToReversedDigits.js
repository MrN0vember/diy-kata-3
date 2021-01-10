const numberToReversedDigits = (number) => {
    return number
    .toString()
    .split('')
    .reverse()
    .map( nums => parseInt(nums));

};

module.exports = numberToReversedDigits;
