import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ru from './ru';
import ua from './ua';

const fallbackLng = ['ru'];
const availableLanguages = ['ru', 'en', 'ua'];

const options = {
    // откуда следует определять язык пользователя 
    order: ['localStorage', 'navigator'],
    lookupLocalStorage: 'entry-task-app-language',
    // кешировать язык пользователя на 
    caches: ['localStorage'],
    // обнаруживать только языки, которые находятся в белом списке 
    checkWhitelist: true
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng,
        whitelist: availableLanguages,
        detection: options,
        resources: { ru, en, ua },
        interpolation: { escapeValue: false },
    });

export default i18n;

