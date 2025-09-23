const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'kx4id3',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    baseUrl: 'http://lojaebac.ebaconline.art.br',
    video: false,
  },
});
