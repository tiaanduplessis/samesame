'use strict'

const acorn = require('acorn')
const assert = require('assert')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')
const root = path.resolve(__dirname, '..')
const source = fs.readFileSync(path.join(root, pkg.source), 'utf8')

for (const entry of [pkg.main, pkg.module, pkg.browser]) {
  const code = fs.readFileSync(path.join(root, entry), 'utf8')
  if (entry === pkg.module) {
    const module = acorn.parse(code, { ecmaVersion: 2015, sourceType: 'module' })
    const exports = module.body.filter(node => node.type === 'ExportNamedDeclaration')
    assert.strictEqual(exports.length, 1, 'One ESM export declaration')
    const declaration = exports[0]
    assert.strictEqual(declaration.specifiers[0].exported.name, 'default', 'Default ESM export')
    acorn.parse(code.slice(0, declaration.start) + code.slice(declaration.end), { ecmaVersion: 5 })
  } else {
    acorn.parse(code, { ecmaVersion: 5 })
  }
  const map = JSON.parse(fs.readFileSync(path.join(root, entry + '.map'), 'utf8'))
  assert.deepStrictEqual(map.sourcesContent, [source], 'Current source embedded in ' + entry)
  assert.strictEqual(map.file, path.basename(entry), 'Source map target matches entry')
}
console.log('ES5 bundle syntax and current source maps passed')
