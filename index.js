var sample_module = require('./sample_module');
var class_module = require('./class_module');

console.log(sample_module.randNum());
console.log(sample_module.MagicNum);
console.log(class_module());

console.log("_________");
console.log("Core Modules");
console.log("_________");

var os = require('os');
console.log(os.platform());

var http = require('http');
// console.log(http);
console.log("_________");
var _ = require('underscore');

const names = ["Sal", "Edda", "Enya", "Randa", "Esra", "Malaka"];

_.each(names, function(name) {
  console.log(name);
});