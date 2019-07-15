let getNumbers = (temp) => {
    temp = temp.replace(/\D/g, '');
    parseInt(temp, 10);
    if (temp === '') {
        return console.log([]);
    } else {
        return console.log([...temp]);
    }
}
getNumbers('string');
getNumbers('n1um3ber95');


function findTypes(...array) {
    let myObject = {

        'object': 0,
        'string': 0,
        'number': 0,
        'undefined': 0
    }
    for (let i = 0; i < array.length; i++) {
        switch (typeof array[i]) {
            case 'object':
                myObject.object += 1;
                break;
            case 'string':
                myObject.string += 1;
                break;
            case 'number':
                myObject.number += 1;
                break;
            case 'undefined':
                myObject.undefined += 1;
                break;
            default:
                break;
        }
    }

    for (let key in myObject) {
        if (myObject[key] !== 0) {
            return console.log(key + ':' + myObject[key]);
        }
    }

}
findTypes('number')
findTypes(null, 5, 'hello')


function executeforEach(myArray, insideFunction) {
    for (let i = 0; i < myArray.length; i++) {

        myArray[i] = insideFunction(myArray[i])
    }
    for (let i = 0; i < myArray.length; i++) {
        return myArray;
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el);
});



function mapArray(myArray, insideFunction) {

    return console.log(executeforEach(myArray, insideFunction));
}
mapArray([2, 5, 8], function (el) {
    return el + 3
});


function filterArray(myArray, insideFunction) {

    return console.log(executeforEach(myArray, insideFunction));
}
filterArray([2, 5, 8], function (el) {


    return el > 3;

});

let showFormattedDate = (calendar) => {

    let allMonthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    let showinfo = {

        month: calendar.getMonth(),
        day: calendar.getDate(),
        year: calendar.getFullYear()
    }

    return console.log(`Date : ${allMonthes[showinfo.month]} ${showinfo.day} ${showinfo.year}`);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

let canConvertToDate = (calendar) => {

    if (Date.parse(calendar)) {
        return console.log(true);
    } else {
        return console.log(false);
    }

}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

let daysBetween = (firstDate, secondDate) => {

    let countdays = Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24));
    return console.log(countdays);

}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// let data = [{
//     'id': '5b5e3168c6bf40f2c1235cd6',
//     'index': 0,
//     ' birthday ': '2016-03-18T00:00:00',
//     'eyeColor': 'green',
//     'name': 'Stein',
//     'favoriteFruit': 'apple'
// },
// {
//     '_id': '5b5e3168e328c0d72e4f27d8',
//     'index': 1,
//     ' birthday ': '1991-02-11T00:00:00',
//     'eyeColor': 'blue',
//     'name': 'Cortez',
//     'favoriteFruit': 'strawberry'
// },
// {
//     '_id': '5b5e3168cc79132b631c666a',
//     'index': 2,
//     ' birthday ': '1984-04-17T00:00:00',
//     'eyeColor': 'blue',
//     'name': 'Suzette',
//     'favoriteFruit': 'apple'
// },
// {
//     '_id': '5b5e31682093adcc6cd0dde5',
//     'index': 3,
//     ' birthday ': '1994-04-17T00:00:00',
//     'eyeColor': 'green',
//     'name': 'George',
//     'favoriteFruit': 'banana'
// }
// ]
// let getAmountOfAdultPeople = (data) => {
     
//         let numofadults = 0;
//   for (let i=0; i<data.length; i++) {
//    let birth = new Date(data[i][' birthday ']);
//    showFormattedDate(birth);
//     let years = daysBetween( birth,new Date());
//     years = years / 365 ;
//     if (years >= 18){
//       numofadults++;  
//     } 
//   }
//   console.log(numofadults);
//   return numofadults;
// }

// getAmountOfAdultPeople(data);

function keys(value){
   let array = [];
       for (const item in value) {
           if (value.hasOwnProperty(item)) {
               array.push(item)
               
           }
       }
       return console.log(array);
   }
keys({keyOne: 1, keyTwo: 2, keyThree: 3}) ;

function showValues(values){

    let array =[];
    for (const item in values) {
        if (values.hasOwnProperty(item)) {
            array.push(values[item]);
            
        }
    }
    return console.log(array);
}
showValues({keyOne: 1, keyTwo: 2, keyThree: 3}) ;