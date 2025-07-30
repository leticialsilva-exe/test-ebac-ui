const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kx4id3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'http://lojaebac.ebaconline.art.br',
    video: true,
        "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "mochawesome-report",
      "reportFilename": "index.html",
      "overwrite": true,
      "html": true,
      "json": false
    }
  },
});
