let maxNumber = (...value) => {
    return Math.max(...value);
}
console.log(maxNumber(19, 26, 44, 37, 17));

//Task2
let copyArray = (array) => {
    return [...array]
}

const array = [1, 2, 3];
const copiedArray = copyArray(array);
console.log(array, copiedArray);
console.log(array === copiedArray);

//Task3
let original = {
    name: 123
}
let addUniqueId = (value) => {
    let clone = Object.assign({}, value, {
        'id': Symbol()
    });
    return clone;
}
console.log(addUniqueId(original));
console.log(original);

//Task4
const oldObj = {
    name: 'Someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
};

let regroupObject = (value) => {


    let {
        name: firstName,
        details: {
            id,
            age,
            university
        }
    } = value;
    let newObj = {
        university,
        user: {
            age,
            firstName,
            id
        }
    }
    return newObj;

}
console.log(regroupObject(oldObj));

//Task5
let findUniqueElements = (...array) => {

    const uniqValue = new Set(array);
    return uniqValue;
}
console.log(findUniqueElements(1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1));

//Task6
let hoverNumber = (value) => {
    const ShownNumbers = value.slice(-4);
    const newNumber = ShownNumbers.padStart(value.length, '*');
    return newNumber;
}
console.log(hoverNumber('0123456789'));

//Task7
let required = () => {
    throw new Error('Sorry but you miss a property')
}

let add = (a, b = required()) => {
    return a + b;
}
console.log(add(1, 3));
console.log(add(1));

//Task8
let fetchReturn = (url) => {
    return fetch(url)
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(sortarr => sortarr.sort((a, b) => {
            let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase()
            if (nameA < nameB) { //сортируем строки по возрастанию
                return -1
            } else if (nameA > nameB) {
                return 1
            }
            return 0
        }))
        .then(result => console.log(result))
        .catch(throwError => console.log('Incorrect url'));
}
fetchReturn('https://api.github.com/users/electricera/repos');
fetchReturn('https://jsonplaceholder.typicode.com/users');


//Task9
async function fetchReturn(url) {
    try {
        let request = await fetch(url);
        let data = await request.text();
        let parse = await JSON.parse(data);
        let sortArrray = parse.sort((a, b) => {
            let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase()
            if (nameA < nameB) {
                return -1
            } else if (nameA > nameB) {
                return 1
            }
            return 0
        })
        console.log(sortArrray);
    } catch (error) {
        throw new Error('Incorect url')
    }
}
fetchReturn('https://api.github.com/users/electricera/repos');
fetchReturn('https://jsonplaceholder.typicode.com/users');