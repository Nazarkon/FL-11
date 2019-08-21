let copyArray = (array) =>{
    return [...array]
} 

const array = [1,2,3];
const copiedArray = copyArray(array);
console.log(array,copiedArray);
console.log(array === copiedArray);
