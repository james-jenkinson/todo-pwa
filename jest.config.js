module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    'node_modules/@hookform/.+.js': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!@hookform)'
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/tests/mockCss.js'
  },
  setupFilesAfterEnv: ['./tests/setup.ts']
}
