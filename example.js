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