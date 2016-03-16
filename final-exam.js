'use strict';

var fs = require('fs');

function wrietObjectToFile(filename, object, callback) {
  setTimeout(write, 2000);
  function write(filename, object, callback) {
    fs.writeFile(filename, json(object), function (err) {
      if (err) {
        return console.log(err);
      }
      callback();
    });
  }
}
