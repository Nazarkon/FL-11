const oldObj = {
    name: 'Someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
};

let regroupObject = (value) => {
    
  
   let { name:firstName, details:{id,age,university}} = value;
   let newObj = {
       university,
       user:{
           age,
           firstName,
           id
       }
   }
   return newObj;

}
console.log(regroupObject(oldObj));