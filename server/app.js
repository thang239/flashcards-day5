var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var FlashCardModel = require('./models/flash-card-model');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// If we're hitting our home page, serve up our index.html file!


app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.post('/cards', function (req, res, next) {
    FlashCardModel.create(req.body)
    .then(function (newCard) {
        res.json(newCard);
    })
    .then(null, next);
});

app.get('/cards', function (req, res, next) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        if (err) return next(err);
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.get('/cards/:id', function (req, res, next){
    FlashCardModel.findOne({_id: req.params.id})
    .then(function (card){
        res.send(card);
    })
})

app.put('/cards/:id',function(req, res, next){
    FlashCardModel.update({_id:req.params.id},req.body)
            .then(function(data){
                res.send(data);
            })
})

app.delete('/delete/:id',function(req, res, next){
    FlashCardModel.remove({_id:req.params.id})
        .then(function(data){
            res.send(data)
        })

})

app.get('/*',function(req, res, next){

    res.sendFile(indexHtmlPath);

})






