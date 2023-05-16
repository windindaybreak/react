module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['./rtl.setup.js'],
};
