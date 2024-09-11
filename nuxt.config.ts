// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
    devtools: { enabled: true },
    devServer: {
        port: 6161,
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/ui', '@nuxtjs/color-mode'],
    tailwindcss: {
        cssPath: ['./assets/css/tailwind.css', { injectPosition: 'first' }],
        configPath: './tailwind.config.js',
        exposeConfig: {
            level: 2,
        },
        config: {},
        viewer: true,
    },
    i18n: {
        vueI18n: './i18n.config.ts', // if you are using custom path, default
    },
    compatibilityDate: '2024-09-11',
    colorMode: {
        preference: 'light',
        fallback: 'light',
    },
});
