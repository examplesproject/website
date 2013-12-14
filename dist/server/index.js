"use strict";
var greetings = require("./greetings")["default"];

var questions = require("./questions")["default"];

var server = require("./server")["default"];


greetings.night();
questions.color();
questions.hobby();
// greetings.morning();

server();