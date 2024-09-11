import en from './locales/en-US';
import id from './locales/id-ID';

export default defineI18nConfig(() => ({
    legacy: false,
    defaultLocale: 'en',
    messages: { en, id },
    locales: [
        {
            code: 'en',
            iso: 'en-US.ts',
        },
        {
            code: 'id',
            iso: 'id-ID.ts',
        },
    ],
    langDir: './locales',
    lazy: false,
}));
