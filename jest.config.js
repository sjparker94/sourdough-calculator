module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>'],
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!/**/*.d.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    transform: {
        // '^.+\\.(ts|tsx)$': 'ts-jest',
        // eslint-disable-next-line no-dupe-keys
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/test/setupTests.ts',
    ],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    testMatch: ['**/*/*.spec.(ts|tsx|js)'],
    moduleDirectories: [
        'node_modules',
        // add the directory with the test-utils.js file, for example:
        'test', // a utility folder
        __dirname, // the root directory
    ],
    moduleNameMapper: {
        '@/components(.*)$': '<rootDir>/src/components/$1',
        '@/elements(.*)$': '<rootDir>/src/elements/$1',
        '@/constants(.*)$': '<rootDir>/src/constants/$1',
        '@/pages(.*)$': '<rootDir>/src/pages/$1',
        '@/redux(.*)$': '<rootDir>/src/redux/$1',
        '@/hooks(.*)$': '<rootDir>/src/hooks/$1',
        '@/types(.*)$': '<rootDir>/src/types/$1',
        '@/utils(.*)$': '<rootDir>/src/utils/$1',
        '@src(.*)$': '<rootDir>/src/$1',
        '@/test(.*)$': '<rootDir>/test/$1',
    },
};
