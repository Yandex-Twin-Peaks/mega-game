const {defaults} = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  // bail: true,
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // roots: ['src'],
  // testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  // verbose: true,
  // globals: {
  //   window: {}
  // },
  // testEnvironment: "node",
  moduleNameMapper: {
    '\\.(css|less|scss|sass|pcss)$': 'identity-obj-proxy',
//    '^src(.*)$': '<rootDir>/src$1',
  },
  // moduleDirectories: ['node_modules', 'src'],
};
