// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    devtools: { enabled: true },
    devServer: {
        port: 6161,
    },
    modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/ui', '@nuxtjs/color-mode', 'floating-vue/nuxt'],
    i18n: {
        vueI18n: '../i18n.config.ts', // if you are using custom path, default
    },
    colorMode: {
        preference: 'light',
        fallback: 'light',
    },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    compatibilityDate: '2025-05-14',
});
