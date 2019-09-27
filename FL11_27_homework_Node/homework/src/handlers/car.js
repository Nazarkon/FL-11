const fs = require('fs');
let data;

function CallDB(callback, FileBack = false) {
    data = JSON.parse(fs.readFileSync('./db/data.json', 'utf8'));
    
    if (FileBack) {
        fs.writeFileSync('./db/data.json', JSON.stringify(data), 'utf8');
    }
    return callback();
}

function getItemById(id) {
    return CallDB(() => {
        let car = data.find(function (car) {
            return car.id === Number(id)
        });
        if (car) {
            return ({status: 200,body: car})
        } else {
            return ({status: 404,body: 'No such id'})
        }
    }, false);
}

function addNewCar(id, brand, model, engineVolume, year) {
    return CallDB(() => {
        let addNewCar = {id: id,brand: brand,model: model,engineVolume: engineVolume,year: year
        };
        let car = data.find(function (car) {
            return car.id === Number(addNewCar.id);
        });
        if (!car) {
            data.push(addNewCar);
            return {
                status: 201,
                body: addNewCar
            }
        } else {
            return {
                status: 409,
                body: {message: 'Car already exists.'}
            }
        }
    }, true);
}

function getAllCars(){
    return CallDB(() =>{
        return{

            status: 200,
            body:data
        }
    })
}


module.exports.getItemById = getItemById;
module.exports.addNewCar = addNewCar;
module.exports.getAllCars = getAllCars;