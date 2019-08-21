let addUniqueId = (value) => {
       
    let copy = Object.assign({},value,{
        'id':Symbol()
    });
    return copy;
}
let first = {
    'name':123
}
let second = {
    'name':123
}
console.log(addUniqueId(first).id === addUniqueId(second).id);