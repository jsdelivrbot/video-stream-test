let app = require('express')();
let request = require('request');
let bodyParser = require('body-parser');
let fs = require('fs');

app.use(bodyParser.json());

// TODO: CORS - Restrict to specific ports for security 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function findResults() {
  var items = fs.readFile('./data.json', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(JSON.parse(data));
    return JSON.parse(data);
  });
}

app.get('/test', function(req, res) {
  res.json(findResults())
})
 
app.listen(3000)