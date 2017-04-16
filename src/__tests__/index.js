/* eslint-env jest */
'use strict'

import samesame from '../index'

test('same', () => {
  expect(samesame).toBeDefined()
  expect(samesame('They hate us', "cause they ain't us")).toBe(true)
  expect(samesame({}, {})).toBe(true)
  expect(samesame({}, 'Object')).toBe(true)
  expect(samesame({}, undefined)).toBe(false)
  expect(samesame('foo', 'bar', 'baz', 'ping', 'boo')).toBe(true)
  expect(samesame('Boolean', true, false)).toBe(true)
  expect(samesame([], 'Array')).toBe(true)
  expect(samesame(/foo/, 'RegExp')).toBe(true)
	expect(samesame(true, 5)).toBe(false)
  expect(samesame('Function', () => {
  })).toBe(true)
})
