import i18n from 'i18next';
import enTranslation from './en.json';
import jaTranslation from './ja.json';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: enTranslation,
    },
    ja: {
        translation: jaTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        lng: 'ja',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: resources,
    });

export default i18n;