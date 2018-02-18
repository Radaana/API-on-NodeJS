var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var db = require('./db');
var artistsController = require('./controllers/artists.js');


var app = express(); 


app.use(bodyParser.json()); // чтобы парсить json
app.use(bodyParser.urlencoded({extended: true})); // чтобы парсить данные формы

app.get('/', function (req, res) {
  res.send('My first API');
}); //Это роут, здесь по методу гет на указанный URL вызывается функция с 2мя паарметрами req - (request) запрос и res - ответ (response)

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);
  // function(req, res) {
  // db.get().collection('artists').deleteOne(
  //     { _id: ObjectID(req.params.id)},
  //     function(err, result) {
  //       if (err) {
  //         console.log(err);
  //         return res.sendStatus(500);
  //       }
  //       res.sendStatus(200);
  //     }
  //   );
  // artists = artists.filter(function(artist) {
  //   return artist.id !== Number(req.params.id);
  // });
  // res.sendStatus(200);
// });

// app.listen(3000, function () {
//   console.log('Server started');
// }); // Настраиваем сервер на определенный порт , где он будет стратовать, и показывать мне сообщение в консоль и привет на странице


db.connect('mongodb://localhost:27017/myapi', function(err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, function() {
    console.log('API app started');
  });
});