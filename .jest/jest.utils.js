const path = require("path");

const commonSetup = {
  rootDir: path.resolve(__dirname, "../"),
  setupFilesAfterEnv: ["<rootDir>/.jest/jest.test-setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/.jest/__mocks__/styleMock.js"
  }
};

const allProjects = {
  unit: {
    ...commonSetup,
    displayName: "Unit Tests",
    testRegex: "src/.*\\.spec\\.jsx?$"
  },
  integration: {
    ...commonSetup,
    displayName: "Integration Tests",
    testRegex: "(integrationTests|src)/.*\\.int\\.test\\.jsx?$"
  }
};

function buildConfig(projects) {
  return {
    projects: projects.map(function(p) {
      return allProjects[p];
    })
  };
}

module.exports = {
  buildConfig,
  commonSetup
};
