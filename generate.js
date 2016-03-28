#!/usr/bin/env node
"use strict"
var generator = require("./index")
var topics = require("./topics")
var colors = require("colors");

console.log(colors.magenta(generator.quantum.generate(10, topics.quantum.sellingPoint)))
