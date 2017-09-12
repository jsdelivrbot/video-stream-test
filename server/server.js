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

const YEAR_LIMIT = '2010';
const SORT_FIELD = 'title';
const TYPE_SERIES = 'series';
const TYPE_MOVIES = 'movies';
const RETURN_LIMIT = 21;

function filterByYear(entry, year) {
  return entry.releaseYear >= year;
}

function filterByType(entry, type) {
  return entry.programType === type
}

function sortBy(a, b, key) {
	const x = a[key].toLowerCase();
	const y = b[key].toLowerCase();
	if (x < y) { return -1; }
  	if (x > y) { return 1; }
  	return 0;
}

app.get('/series', function(req, res) {
	fs.readFile('./data.json', 'utf8', (err, data) =>{
		
		if (err) { 
			res.status(500).send('Oops, something broke'); throw err; 
		}; //TODO: Errors need to be handeled properly

		let payload = JSON.parse(data).entries
			.filter(entry => filterByYear(entry, YEAR_LIMIT))
			.filter(entry => filterByType(entry, TYPE_SERIES))
			.slice(0, RETURN_LIMIT)
			.sort((a, b) => sortBy(a, b, SORT_FIELD))
		
		res.json(payload);
	});
})

app.listen(3000)