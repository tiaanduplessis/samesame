
# samesame
[![package version](https://img.shields.io/npm/v/samesame.svg?style=flat-square)](https://npmjs.org/package/samesame)
[![package downloads](https://img.shields.io/npm/dm/samesame.svg?style=flat-square)](https://npmjs.org/package/samesame)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/samesame.svg?style=flat-square)](https://npmjs.org/package/samesame)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/samesame.svg)](https://greenkeeper.io/)
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Travis Build](https://img.shields.io/travis/tiaanduplessis/samesame.svg?style=flat-square)](https://travis-ci.org/tiaanduplessis/samesame)

> Simple, Lightweight type checking of multiple arguments

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
- [License](#License)


## About

This module uses the `Object.prototype.toString()` method to provide better type checking and supports comparing the types of multiple values.

<div align="center">
	<image src="https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif" alt="same same"/>
</div>


## Install

cdn:

```html
<script src="https://unpkg.com/samesame/dist/samesame.umd.js"></script>
```

npm or yarn:

```sh
$ npm install --save samesame
# OR
$ yarn add samesame
```

## Usage

```js
const samesame = require('samesame')

samesame('They hate us', 'cause they ain\'t us') // true
samesame({}, {}) // true
samesame({}, 'Object') // true
samesame({}, undefined) // false
samesame('foo', 'bar', 'baz') // true
samesame('Boolean', true, false) // true
samesame([], 'Array') // true
samesame(true, 5) // false
samesame(/foo/, 'RegExp') // true
samesame('Function', () => {}) // true
samesame(1, 'foo', 'bar') // false: every argument must have the same type
```

The module exports a single `function`. With two or more arguments it returns `true` only when every argument has the same type. For backwards compatibility, a call with no arguments throws `TypeError`, and a call with one argument returns `undefined`.

Supported type strings that can be passed as an argument are:

- `Array`
- `Object`
- `String`
- `Date`
- `RegExp`
- `Function`
- `Boolean`
- `Number`
- `Null`
- `Undefined`

## Development

The published package still supports Node.js 6 and later. The build and lint
tools require Node.js 22.7 or later; they are development dependencies only.
The CommonJS, ES module, and UMD entry paths are unchanged. Source uses ES5
syntax apart from its module export so the CommonJS and UMD builds do not need
a transpiler.

```sh
npm ci --ignore-scripts
npm test
npm run coverage
```

`npm test` checks style, rebuilds all three distributions and source maps, tests
source and built exports, then packs and installs the package in a temporary
consumer project to check all entry points. Tests include the documented type
names and every three-value combination of their types. `npm run coverage`
uses Node's built-in coverage reporting. To check the legacy runtime without
installing development tools there, run `node test/index.test.js` with Node 6
after building on Node 22.7 or later.

The tracked `dist` files must be regenerated with `npm run build` when source
changes. Release and publishing remain manual.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    