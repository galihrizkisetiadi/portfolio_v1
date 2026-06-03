// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

import Aura from '@primeuix/themes/aura';
import {
    Drawer,
} from 'primevue';

export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
    },
    devtools: { enabled: true },
    devServer: {
        port: 6161,
    },
    modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/ui', '@nuxtjs/color-mode', 'floating-vue/nuxt', '@primevue/nuxt-module'],
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
    primevue: {
        autoImport: false,
        components: {
            include: [Drawer],
        },
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: false,
                },
            },
            
        },
    },
});
