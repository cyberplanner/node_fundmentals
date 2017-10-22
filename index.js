var sample_module = require('./sample_module');
var class_module = require('./class_module');

// console.log(sample_module.randNum());
// console.log(sample_module.MagicNum);
// console.log(class_module());
// 
// console.log("_________");
// console.log("Core Modules");
// console.log("_________");

// var os = require('os');
// console.log(os.platform());
// 
// var http = require('http');
// console.log(http);
// console.log("_________");
// var _ = require('underscore');

// const names = ["Sal", "Edda", "Enya", "Randa", "Esra", "Malaka"];
// 
// _.each(names, function(name) {
//   console.log(name);
// });

console.log("_________");
console.log("Building custom modules");
console.log("_________");

var apple = require('./fruit');

console.log(apple().getInfo());


var banana = require('./fruit')();

banana.setName('Banana');
console.log(banana.getInfo()); // => { name: 'Apple', description: 'Fruit from the apple tree' }
// The fruit module will return the same apple object because it was cached before