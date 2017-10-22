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

Create and export a module:

```js
  // in fruit.js
  var name = "Apple",
    description = "Fruit from the apple tree";
    
  module.exports = function() {
    var functions = {
      setName: function(name) {
        this.name = name;
      },
      setDescription: function(desc) {
        this.description = desc;
      },
      getInfo: function() {
        return {
          name: name,
          description: description
        };
      }
    };
    return functions;
  }
```

Require and use it:

```js
var apple = require('./fruit');

console.log(apple().getInfo());
```
