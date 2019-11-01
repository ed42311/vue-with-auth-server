const { LINT_ENV } = process.env

const clientLintConfig = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '*.spec.js'
      ],
      env: {
        mocha: true
      }
    }
  ]
}

const serverLintConfig = {
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  extends: 'eslint:recommended',
  globals: {
    expect: true
  },
  rules: {
    'no-console': 'warn'
  }
}

module.exports = LINT_ENV === 'server' ? serverLintConfig : clientLintConfig
