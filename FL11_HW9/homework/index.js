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

//Task#1
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

//Task#2
function executeforEach(myArray, returnarray) {
    let newarr = [];
    for (let i = 0; i < myArray.length; i++) {

        myArray[i] = returnarray(myArray[i]);
    }
    newarr.push(returnarray);
}
executeforEach([1, 2, 3], function (el) {
    console.log(el);
});


//Task#3
function mapArray(myArray, returnarray) {

    let newarr = [];
    executeforEach(myArray,returnarray);
    newarr.push(myArray);
    return console.log(myArray);
}
mapArray([2, 5, 8], function (el) {
    return el + 3
});

//Task#4
function filterArray(myArray,returnarray) {
    let newarr = [];
    executeforEach(myArray, function (el) {
        if (returnarray(el) === true) {
           newarr.push(el);
        }
    });
    return console.log(newarr);
}
filterArray([2, 5, 8], function (el) {
    return el > 3;

});


//Task#5
let showFormattedDate = (calendar) => {

    let allMonthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    let showinfo = {

        month: calendar.getMonth(),
        day: calendar.getDate(),
        year: calendar.getFullYear()
    }

    return console.log(`Date : ${allMonthes[showinfo.month]} ${showinfo.day} ${showinfo.year}`);
}

//Task#6
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


//Task#7
let daysBetween = (firstDate, secondDate) => {

    let countdays = Math.round(Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24));
    return console.log(countdays);

}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// //Task#8

let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ' : '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function amountOfPeople(data) {
    let year = 365;
    let peopleOver18 = [];
    let date = new Date();
    for (let i = 0; i < data.length; i++) {
      let result = Math.round(daysBetween(date, new Date(data[i][' birthday '])) / year);
      peopleOver18.push(result);
    }

    return filterArray(peopleOver18, function (el) {
        return el > 18;
    });
}
amountOfPeople(data);


//Task#9
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

//Task#10
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