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

var fruit = require('./fruit');

var banana = fruit("Banana", "Long yellow fruit");
var cherry = fruit("Cherry", "small red fruit");

banana.setName('Banana');
console.log(banana.getInfo()); // => { name: 'Banana', description: 'Long yellow fruit' }
console.log(cherry.getInfo()); // => { name: 'Cherry', description: 'small red fruit' }

// This work now as we create different objects
