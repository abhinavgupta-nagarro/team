module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
