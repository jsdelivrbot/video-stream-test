let app = require('express')();
let request = require('request');
let bodyParser = require('body-parser');
let fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// TODO: CORS - Restrict to specific ports for security 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', function(req, res) {
	fs.readFile('./data.json', 'utf8', (err, data) =>{
		if (err) throw err;
		res.json(JSON.parse(data))
	});
})
 
app.listen(3000)