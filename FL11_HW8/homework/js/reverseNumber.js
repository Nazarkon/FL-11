let reverseNumber = (number) => {
    let reversedNumber = 0;
    let multiplier = 10;
    while (number !== 0) {
        reversedNumber *= multiplier;
        reversedNumber += number % multiplier;
        number -= number % multiplier;
        number /= multiplier;
    }
    return reversedNumber;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-654));
console.log(reverseNumber(10000));