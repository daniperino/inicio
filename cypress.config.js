{
  "reporter"; "mochawesome",
  "reportarOptions"; {
    "reportDir"; "cypress/report/mochawesome-report",
    "overwrite"; true,
    "html"; true,
    "json"; false,
    "timestamp"; "mmddyyyy_HHMMss"
  }
} 

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3bmqne',
  e2e: {
    baseUrl: 'https://www.alura.com.br/'
  },

});


