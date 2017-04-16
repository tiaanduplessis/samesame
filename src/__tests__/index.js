/* eslint-env jest */
'use strict'

import samesame from '../index'

test('same', () => {
  expect(samesame).toBeDefined()
  expect(samesame('They hate us', "cause they ain't us")).toBeTruthy()
  expect(samesame({}, {})).toBeTruthy()
  expect(samesame({}, 'Object')).toBeTruthy()
  expect(samesame({}, undefined)).toBeFalsy()
  expect(samesame('foo', 'bar', 'baz', 'ping', 'boo')).toBeTruthy()
  expect(samesame('Boolean', true, false)).toBeTruthy()
  expect(samesame([], 'Array')).toBeTruthy()
  expect(samesame(/foo/, 'RegExp')).toBeTruthy()
  expect(samesame('Function', () => {
  })).toBeTruthy()
})
