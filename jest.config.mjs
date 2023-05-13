import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    // '<rootDir>/.jest/setEnvVars.ts'
  ],

  testEnvironment: 'jest-environment-jsdom'
}

export default createJestConfig(config)
