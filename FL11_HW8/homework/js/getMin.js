let getMin = function () {
    let numbers = [4, 8, 2, 6, 7]
    return Math.min.apply(null, numbers);
};
console.log(getMin());