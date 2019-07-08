let firstSide = +prompt('Enter first side', '');
let secondSide = +prompt('Enter second side', '');
let thirdSide = +prompt('Enter third side', '');

if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
    console.log('Triangle can exist');
    
        if (firstSide === secondSide && secondSide === thirdSide && thirdSide === firstSide) {
            console.log('Eequivalent triangle');
        } else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide) {
            console.log('Isosceles triangle');
        } else if (firstSide !== secondSide && secondSide !== thirdSide && thirdSide !== firstSide) {
            console.log('Normal triangle');
        }else {
        console.log('Triangle doesn’t exist');
        }
    }
