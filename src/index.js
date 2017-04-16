'use strict'

const types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'

function type (value) {
  return Object.prototype.toString.apply(value).slice(8, -1)
}

module.exports = function (...args) {
  let result

  args.map((value) => {
    return type(value) === 'String' && types.includes(value)
      ? value
      : type(value)
  })
    .reduce((acc, curr) => {
      result = acc === curr
      return curr
    })

  return result
}

