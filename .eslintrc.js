module.exports = {
  root: true,
  extends: ['standard', 'standard-jsx'],
  env: { browser: true },
  settings: {
    react: { version: require('react/package.json').version }
  },
  rules: {
    'multiline-ternary': 'off'
  }
}
