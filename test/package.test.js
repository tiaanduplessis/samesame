'use strict'

const assert = require('assert')
const childProcess = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const root = path.resolve(__dirname, '..')
const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'samesame-package-'))
const npm = process.env.npm_execpath
assert(npm, 'Run this check through npm run test:package')
function run (args, cwd, env) {
  return childProcess.execFileSync(process.execPath, args, {
    cwd,
    env: Object.assign({}, process.env, env),
    encoding: 'utf8'
  })
}
try {
  const packed = JSON.parse(run([npm, 'pack', '--ignore-scripts', '--json', '--pack-destination', directory], root))[0]
  const paths = packed.files.map(file => file.path)
  const pkg = require('../package.json')
  for (const entry of [pkg.main, pkg.module, pkg.browser]) {
    assert(paths.includes(entry), 'Packed entry: ' + entry)
    assert(paths.includes(entry + '.map'), 'Packed source map: ' + entry)
  }
  assert(!paths.some(file => /^(test\/|node_modules\/)|lock|\.travis/.test(file)), 'Only consumer files are packed')
  fs.writeFileSync(path.join(directory, 'package.json'), '{"private":true}\n')
  run([npm, 'install', '--ignore-scripts', '--omit=dev', '--no-audit', '--no-fund', '--package-lock=false', path.join(directory, packed.filename)], directory)
  const env = { SAMESAME_PACKAGE_ROOT: path.join(directory, 'node_modules', 'samesame') }
  process.stdout.write(run([path.join(root, 'test/index.test.js')], directory, env))
  process.stdout.write(run([path.join(root, 'test/modules.test.mjs')], directory, env))
  console.log('Packed consumer installation passed (' + paths.length + ' files)')
} finally {
  fs.rmSync(directory, { recursive: true, force: true })
}
