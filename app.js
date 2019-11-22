var express = require('express')
var path = require('path')



var app = express()

// template engine
app.set('view engine', 'ejs')

// static files
app.use(express.static(__dirname + '/assets'))

// fire controller


// HTTP request & respond

// view index
app.get('/', function(req,res){
    res.render('index.html')
})
app.get('home', function(req,res){
    res.render('index.html')
})
app.get('index', function(req,res){
    res.render('index.html')
})







// listen to port
app.listen(3000)
console.log("you are now listening to port 3000.")
