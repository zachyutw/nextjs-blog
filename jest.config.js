// jest.config.js https://jestjs.io/docs/en/configuration
const { defaults } = require('jest-config');
module.exports = {
    verbose: true,
    collectCoverageFrom: ['**/src/*.{js,jsx}', '**/tests/**'],
    moduleDirectories: ['node_modules', 'src', 'tests', '<rootDir>'],
    // ...
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    // ...,
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
};
