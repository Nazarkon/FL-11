let findUniqueElements = (...array) => {

    const uniqValue = new Set(array);
    return uniqValue;
}
console.log(findUniqueElements(1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1));