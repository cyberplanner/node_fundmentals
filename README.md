# Notes:

#### Exporting:
Exporting functions:
```js
// in module.js
exports.randomNum = fucntion() {
  return Math.random();
}

// exports a function (attaches it to the exports object on the global node object) and you can require the module and call the function like so:
var module = require("./module.js");
console.log(module.randomNum());
```
Exporting single function:
```js
// in module.js
module.exports  = function() {
  return Math.random();
}
// and call the whole module as a function:
var module = require("./module.js");
console.log(module());
```
