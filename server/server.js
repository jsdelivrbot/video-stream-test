let app = require('express')();
let request = require('request');
let bodyParser = require('body-parser')

app.use(bodyParser.json());

// TODO: CORS - Restrict to specific ports for security 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test', function(req, res) {
  res.sendStatus(200)
})
 
app.listen(3000)