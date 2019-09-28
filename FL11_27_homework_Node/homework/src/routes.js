const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const car = require('./handlers/car');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/car', function (req, res) {
    let result = car.addNewCar(req.body.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    console.log(result)
    res.send(result.body);
});

router.get('/car/:id', function (req, res) {
    let result = car.getItemById(req.params.id);
    res.send(result.body);
});

router.get('/car',function(req,res) {
    let result = car.getAllCars();
    res.send(result.body);
})

router.put('/car/:id', function (req, res) {
    let result = car.putItemById(req.params.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.send(result.body);
});
module.exports = router;

