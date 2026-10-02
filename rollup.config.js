const pkg = require('./package.json')

module.exports = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
    { file: pkg.browser, format: 'umd', name: 'samesame' }
  ].map(output => Object.assign({ sourcemap: true, generatedCode: 'es5' }, output))
}
