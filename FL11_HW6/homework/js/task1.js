let a1=+prompt("Enter aX","");
let a2=+prompt("Enter aY","");
let b1=+prompt("Enter bX","");
let b2=+prompt("Enter bY","");
let c1=+prompt("Enter cX","");
let c2=+prompt("Enter cY","");
let cX , cY;

cX = (a1+b1)/2;
cY = (a2+b2)/2;
if(c1 == cX && c2 == cY){
    console.log(true);
}else{
    console.log(false);
}
