/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif']
            }
        }
    },
    plugins: []
};
