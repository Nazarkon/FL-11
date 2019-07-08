let a1 = +prompt('Enter aX', '');
let a2 = +prompt('Enter aY', '');
let b1 = +prompt('Enter bX', '');
let b2 = +prompt('Enter bY', '');
let c1 = +prompt('Enter cX', '');
let c2 = +prompt('Enter cY', '');
let cX, cY;
if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
    console.log('Sorry one of coordinate was not a number');
} else {
    cX = (a1 + b1) / 2;
    cY = (a2 + b2) / 2;
    if (c1 === cX && c2 === cY) {
        console.log(true);
    } else {
        console.log(false);
    }
}