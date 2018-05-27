
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
<script src="https://unpkg.com/samesame/lib/samesame.min.js"></script>
<!-- Or -->
<script src="https://rawgit.com/tiaanduplessis/samesame/master/lib/samesame.min.js"></script>
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
```

The module exports a single `function` that can take multiple arguments and returns `boolean` value.

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

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    