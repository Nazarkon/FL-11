let hoverNumber = (value) =>{
    const ShownNumbers = value.slice(-4);
    const newNumber = ShownNumbers.padStart(value.length,'*');
    return newNumber;
}
console.log(hoverNumber('0123456789'));