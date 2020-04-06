module.exports = {
  unmockedModulePathPatterns: ['react'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^components(.*)$': '<rootDir>/src/components$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
};
