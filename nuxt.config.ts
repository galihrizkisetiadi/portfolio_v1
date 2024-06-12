// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    devServer: {
        port: 6161
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
    tailwindcss: {
        cssPath: ['./assets/css/tailwind.css', { injectPosition: 'first' }],
        configPath: './tailwind.config.js',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true
    }
});
