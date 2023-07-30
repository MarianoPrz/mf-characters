import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from "../public/locales/en/translation.json";
import translationES from "../public/locales/es/translation.json";


const appHostInstance = i18n.createInstance();

appHostInstance
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        debug: true,
        resources: {
            en: {
                translation: translationEN
            },
            es: {
                translation: translationES
            }
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default appHostInstance;