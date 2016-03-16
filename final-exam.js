'use strict';

var fs = require('fs');

function wrietObjectToFile(filename, object, callback) {
  setTimeout(write(filename, object, callback), 2000);
}

function write(filename, object, callback) {
  var json_data = JSON.stringify(object);
  fs.writeFile(filename, json_data, function (err) {
    if (err) {
      return console.log(err);
    }
    callback();
  });
}

module.exports = wrietObjectToFile;
