# Quantum Generator

How should you navigate this sacred quantum matrix?

## Installation

Go to your node project, then:

    npm install quantum-generator

## Usage

Then in your awesome module:

    var quantum = require('quantum-generator').quantum
    console.log(quantum.generate())

Generate five sentences:

    console.log(quantum.generate(5))

on different topics:

    var topics = require('quantum-generator').topics
    console.log(quantum.generate(2, topics.quantum.sellingPoint))

Quantum topics:

  - explaining
  - warnings
  - futureHope
  - youAndYourProblems
  - history
  - sellingPoint

### ES6 import

    let { quantum, business } = require("quantum-generator")

    console.log(quantum.generate())
    console.log(business.generate())

## License

[MIT](https://opensource.org/licenses/MIT)

## Npm package

[npmjs.com](https://npmjs.com/package/quantum-generator)

## Authors

[davidhq](https://github.com/davidhq)

[sebpearce](https://github.com/sebpearce)
