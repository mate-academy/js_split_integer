module.exports = {
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.js"],
  collectCoverageFrom: ["src/**/*.js", "!src/**/*.test.js"],
  verbose: true,
  rootDir: ".",
};
