import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import contract from './contract.js'

const root = process.env.SAMESAME_PACKAGE_ROOT || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
for (const entry of [pkg.source, pkg.module]) {
  // Node 22.7+ detects ESM syntax in these historical .js paths. Keep the
  // package mode unchanged so CommonJS consumers still use the existing main.
  const module = await import(pathToFileURL(path.join(root, entry)).href)
  contract(module.default, entry)
}
