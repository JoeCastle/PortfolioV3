import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        /**
         * Registers Cypress node event listeners and plugins for e2e runs.
         * @param on Cypress node event registration callback.
         * @param config Runtime Cypress configuration.
         * @returns The final Cypress configuration object.
         */
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('@cypress/code-coverage/task')(on, config);

            return config;
        },
    },

    video: false,

    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
});
