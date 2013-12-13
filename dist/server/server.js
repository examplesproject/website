"use strict";
var app = require("./app")["default"];


var server = function () {
  app.listen(3000);
  console.log('Listening on port 3000');
}

exports["default"] = server;