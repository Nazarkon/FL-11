let showEror = () => {
    throw new Error('Sorry but you miss a property')
}

let add = (a = showEror(),b = showEror()) => {
    return a+b;
}
console.log(add(1,3));
console.log(add(1));