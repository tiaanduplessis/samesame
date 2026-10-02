(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.samesame = factory());
})(this, (function () { 'use strict';

  /* eslint-disable no-var -- Keep the distributed bundles compatible with ES5 syntax. */
  var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined';

  function type (value) {
    return Object.prototype.toString.apply(value).slice(8, -1)
  }

  function index () {
    var args = [];
    for (var length = arguments.length; length--;) args[length] = arguments[length];
    var result;

    args
      .map(function (value) {
        return type(value) === 'String' && types.includes(value) ? value : type(value)
      })
      .reduce(function (acc, curr) {
        result = result !== false && acc === curr;
        return curr
      });

    return result
  }

  return index;

}));
//# sourceMappingURL=samesame.umd.js.map
