const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
projectId: "g3pqvi",
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
