const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended : true}));

// app.get('/', function (req,res) { 
//     res.send('Hello API')
//  })

//  app.get('/artists', function (req,res) { 
//      res.send(artist)
//   })

//   app.get('/artists/:id',function (req,res) {
//       console.log(req.params) 
//       let artists = artist.find(function (artist) { 
//           return artist.id === Number(req.params.id);
//        });
       
//        artists.name = req.body.name
//       res.send(artists)
//       res.send(artists)
//    })

//    app.post('/artists' , function (req,res) { 
//       let artist = {
//           id:Date.now(),
//           name: req.body.name,
//       };
//       artists.push(artist)
//       res.send(artist)
//     })
app.use(routes);
app.listen(port, () => console.log(`Example app listening on port ${port}`));