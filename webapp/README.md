# Stan Coding Challenge

## React / Redux + Material UI

This project leverages syles and concepts from [material-ui], a react wrapper around Googles Material UI designs. 

The project makes use of a simple node backend for serving up data for the UI.

While every effort was made to complete all the requirements in the allocated time, there are a number of parts that I still feel need considerable work.
These are highlighted inline as comments or in the TODO's section in this README.

### Prerequisites
To run this project the following must be installed on the host machine:
* [node.js] - A Lightweight Javascript Backend ( v6 or later)
* [npm] - Package Manager for JavaScript ( v4 or later )

### Builds
* Webpack + Babel used for JSX + ES6 transpiling
* npm used for scripting

### Installation
```sh
## From the projects route dir:
$ cd server/ && npm install -d && npm start
$ cd webapp/ && npm install -d && npm start
```

The webapp runs on port 8080!

### TODO's
* The footer needs to be added using the provided icons.
* The code is currently not being bundeled into a dist folder. 
* No unit tests have been added to the code base. 
* Clicking on the Apps name "Demo Streaming" should navigate the user back to "/".
* There is a significant ammount of code duplication between the "movie" and "series" pages. It would be nice to come up with a more generic solution.
* I am currently unhappy with the pattern in place for handling errors in the http requests to the backend. Would like more time to investigate this and come  up with a more robust solution. 

[material-ui]: <http://www.material-ui.com/>
[npm]: <https://www.npmjs.com/>
[node.js]: <http://nodejs.org>

