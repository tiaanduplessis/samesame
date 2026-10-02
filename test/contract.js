'use strict'

const assert = require('assert')

module.exports = function contract (samesame, label) {
  let assertions = 0
  function check (args, expected, description) {
    assert.strictEqual(samesame.apply(null, args), expected, label + ': ' + description)
    assertions++
  }

  assert.strictEqual(typeof samesame, 'function', label + ': exports a function')
  assert.throws(() => samesame(), error => error.name === 'TypeError', label + ': empty call')
  assertions += 2
  ;[undefined, null, false, 0, NaN, '', 'Object', [], {}, () => {}].forEach(value => {
    check([value], undefined, 'singleton remains undefined')
  })

  check(['They hate us', "cause they ain't us"], true, 'ordinary strings')
  check(['foo', 'bar', 'baz', 'ping', 'boo'], true, 'many strings')
  check([1, 'foo', 'bar'], false, 'earlier mismatch is not overwritten')
  check(['foo', 1, 'bar', 'baz'], false, 'middle mismatch is not overwritten')
  check(['foo', 'bar', 1], false, 'last mismatch')
  check([true, 5], false, 'different primitive types')
  check(['Boolean', true, false], true, 'type name and values')
  check([{}, undefined], false, 'object and undefined')
  check([NaN, 1, Infinity], true, 'NaN and Infinity are numbers')
  check([new Date(0), new Date(NaN), 'Date'], true, 'invalid dates remain dates')
  check([/foo/, /bar/g, 'RegExp'], true, 'regular expressions')
  check([[], [1, 'foo'], 'Array'], true, 'array contents do not affect type')
  check([[], {}, {}], false, 'array mismatch before matching objects')
  check([null, {}, {}], false, 'null mismatch before matching objects')
  check([null, undefined, undefined], false, 'null and undefined stay distinct')
  check([Object.create(null), {}, 'Object'], true, 'null-prototype objects')
  class First {}
  class Second {}
  check([new First(), new Second(), 'Object'], true, 'instances compare by tag')
  check([Object('foo'), 'bar', 'String'], true, 'boxed string')
  check([Object(1), NaN, 'Number'], true, 'boxed number')
  check([Object(false), true, 'Boolean'], true, 'boxed boolean')
  check([Symbol('first'), Symbol('second')], true, 'symbols')
  check([Symbol('first'), 'foo', 'bar'], false, 'symbol mismatch')
  check([new Map(), new Map()], true, 'maps')
  check([new Set(), new Set()], true, 'sets')
  check([new Uint8Array(1), new Uint8Array(2)], true, 'typed arrays')
  check([new Uint8Array(1), new Uint16Array(1), new Uint16Array(2)], false, 'typed array mismatch')
  check([First, Second, 'Function'], true, 'class constructors are functions')
  if (typeof BigInt === 'function') {
    check([BigInt(1), BigInt(2)], true, 'bigints')
    check([BigInt(1), 2, 3], false, 'bigint mismatch')
  }

  // Preserve the existing type-name interpretation outside this reducer fix.
  check(['y', 'foo'], false, 'legacy partial type-name interpretation')
  check(['', 'foo'], false, 'legacy empty string interpretation')

  const samples = [
    ['Array', []], ['Object', {}], ['String', 'ordinary text'],
    ['Date', new Date(0)], ['RegExp', /sample/], ['Function', () => {}],
    ['Boolean', false], ['Number', 0], ['Null', null], ['Undefined', undefined]
  ]
  samples.forEach(([name, value]) => {
    check([name, value], true, name + ' token before value')
    check([value, name, value], true, name + ' token between values')
    check([value, value, name], true, name + ' token after values')
  })
  samples.forEach(([firstName, first]) => {
    samples.forEach(([secondName, second]) => {
      samples.forEach(([thirdName, third]) => {
        check([first, second, third], firstName === secondName && secondName === thirdName,
          'all triples: ' + [firstName, secondName, thirdName].join(', '))
      })
    })
  })
  console.log(label + ': ' + assertions + ' assertions passed')
}
