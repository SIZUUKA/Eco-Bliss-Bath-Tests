import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
