<h1 align="center">🖐 samesame 👀</h1>
<div align="center">
  <strong>Simple, Lightweight type checking of multiple arguments</strong>
</div>
<br>
<div align="center">
    <a href="https://npmjs.org/package/samesame">
      <img src="https://img.shields.io/npm/v/samesame.svg?style=flat-square" alt="NPM version" />
    </a>
    <a href="https://npmjs.org/package/samesame">
    <img src="https://img.shields.io/npm/dm/samesame.svg?style=flat-square" alt="Downloads" />
    </a>
    <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
    </a>
    <a href="https://travis-ci.org/tiaanduplessis/samesame">
      <img src="https://img.shields.io/travis/tiaanduplessis/samesame/master.svg?style=flat-square" alt="Travis Build" />
    </a>
    <a href="https://github.com/RichardLitt/standard-readme)">
      <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
    </a>
    <a href="https://badge.fury.io/gh/tiaanduplessis%2Fsamesame">
      <img src="https://badge.fury.io/gh/tiaanduplessis%2Fsamesame.svg?style=flat-square" alt="GitHub version" />
   </a>
   <a href="http://packagequality.com/#?package=samesame">
    <img src="http://packagequality.com/shield/samesame.svg" alt="Package quality"/>
  </a>
</div>
<div align="center">
  <a href="https://npmjs.org/package/samesame">
    <img src="https://img.shields.io/npm/v/samesame.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/samesame">
  <img src="https://img.shields.io/npm/dm/samesame.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/samesame">
    <img src="https://img.shields.io/travis/tiaanduplessis/samesame.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fsamesame">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fsamesame.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/samesame">
    <img src="https://dependencyci.com/github/tiaanduplessis/samesame/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/samesame/blob/master/other/LICENSE">
    <img src="https://img.shields.io/npm/l/samesame.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/samesame/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/samesame.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/samesame/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/samesame.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20samesame!%20https://github.com/tiaanduplessis/samesame%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/samesame.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/samesame/graphs/contributors">contributors</a>
</div>


<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
	<li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## About

This module uses the `Object.prototype.toString()` method to provide better type checking and supports comparing the types of multiple values. It's just **580 Bytes** in size all bundled up as a UMD module, minified & gzipped(PR to reduce this further would be awesome 🎉).

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

The module exports a single `function` that can take multiple arguments and returns `boolean` value.

```js
const samesame = require('samesame')

samesame('They hate us', 'cause they ain\'t us')
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

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
