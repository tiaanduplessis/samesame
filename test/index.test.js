'use strict'

const fs = require('fs')
const path = require('path')
const vm = require('vm')
const contract = require('./contract')

const root = process.env.SAMESAME_PACKAGE_ROOT || path.resolve(__dirname, '..')
const pkg = require(path.join(root, 'package.json'))
contract(require(root), 'CommonJS package entry')
contract(require(path.join(root, pkg.browser)), 'UMD CommonJS entry')

const browser = {}
const umd = fs.readFileSync(path.join(root, pkg.browser), 'utf8')
vm.runInNewContext(umd, browser, { filename: pkg.browser })
contract(browser.samesame, 'UMD browser global')

const amd = {
  define: (dependencies, factory) => {
    if (typeof dependencies === 'function') {
      amd.samesame = dependencies()
    } else {
      assertEmptyDependencies(dependencies)
      amd.samesame = factory()
    }
  }
}
function assertEmptyDependencies (dependencies) {
  if (dependencies.length !== 0) throw new Error('Unexpected UMD dependency')
}
amd.define.amd = {}
vm.runInNewContext(umd, amd, { filename: pkg.browser })
contract(amd.samesame, 'UMD AMD entry')
