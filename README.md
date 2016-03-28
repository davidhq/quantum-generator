# Quantum Generator

How should you navigate this sacred quantum matrix?

## Global installation

Go to your node project, then:

```
npm install -g quantum-generator
```

Then

```
quantum
```

to receive ten sentences of quantum wisdom.

## Installation in you project

Go to your node project, then:

```
npm install quantum-generator
```

## Usage

Then in your awesome module:

```javascript
var quantum = require('quantum-generator').quantum
console.log(quantum.generate())
```

Generate five sentences:

```javascript
console.log(quantum.generate(5))
```

on different topics:

```javascript
var topics = require('quantum-generator').topics
console.log(quantum.generate(2, topics.quantum.sellingPoint))
```

Quantum topics:

  - explaining
  - warnings
  - futureHope
  - youAndYourProblems
  - history
  - sellingPoint

### ES6 import

```javascript
let { quantum, business } = require("quantum-generator")

console.log(quantum.generate())
console.log(business.generate())
```

## License

[MIT](https://opensource.org/licenses/MIT)

## Npm package

[npmjs.com](https://npmjs.com/package/quantum-generator)

## Authors

[davidhq](https://github.com/davidhq)

[sebpearce](https://github.com/sebpearce)
