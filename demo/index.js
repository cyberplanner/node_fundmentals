var express = require('express');
var _ = require('underscore');

const names = ["Sal", "Edda", "Enya", "Randa", "Esra", "Malaka"];

_.each(names, function(name) {
  console.log(name);
});