import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
//import en from './en';
//import ru from './ru';

// const resources = {
//     ru: {
//         translation: {
//             appName: "React Intro",
//         },
//     },
//     en: {
//         translation: {
//             appName: "React Intro",
//         },
//     },
// };


let language = localStorage.getItem('language');

if (language === undefined) {
    language = 'ru';
}

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'ru',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        // resources,
        resources: {
            ru: { translations: ru },
            en: { translations: en },
        },
        react: {
            wait: true,
        },
    });

export default i18next;

