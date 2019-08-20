const NumberT ='0123456789';
const ShownNumbers = NumberT.slice(-4);
const newNumber = ShownNumbers.padStart(NumberT.length,'*');
console.log(newNumber);