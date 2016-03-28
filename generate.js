#!/usr/bin/env node
"use strict"
var generator = require("./index")
var topics = require("./topics")

console.log(generator.quantum.generate(10, topics.quantum.sellingPoint))
